import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_BACKEND_BASE_URL = "https://api.sosyalhakrehberi.com";

function getConfiguredBackendBaseUrl(): string {
  const candidate =
    process.env.BACKEND_BASE_URL ??
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    DEFAULT_BACKEND_BASE_URL;

  return candidate.replace(/\/+$/, "");
}

type RouteContext = {
  params: { path?: string[] } | Promise<{ path?: string[] }>;
};

const HOP_BY_HOP_REQUEST_HEADERS = new Set([
  "connection",
  "content-length",
  "expect",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

const HOP_BY_HOP_RESPONSE_HEADERS = new Set([
  "connection",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

function getTargetBaseUrl() {
  return getConfiguredBackendBaseUrl();
}

async function forward(request: Request, context: RouteContext): Promise<Response> {
  const backendBaseUrl = getTargetBaseUrl();

  if (!backendBaseUrl) {
    return NextResponse.json(
      {
        message: "Backend proxy yapılandırılamadı. Lütfen backend adresini kontrol edin.",
        error: "configuration_error",
        status: 500,
        correlation_id: "",
      },
      { status: 500 },
    );
  }

  const { path = [] } = await context.params;
  const targetPath = path.length > 0 ? `/api/${path.join("/")}` : "/api";
  const sourceUrl = new URL(request.url);
  const targetUrl = new URL(targetPath, backendBaseUrl);
  targetUrl.search = sourceUrl.search;

  const headers = new Headers(request.headers);

  for (const headerName of HOP_BY_HOP_REQUEST_HEADERS) {
    headers.delete(headerName);
  }

  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

  const backendResponse = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
    cache: "no-store",
    redirect: "manual",
  });

  const responseHeaders = new Headers(backendResponse.headers);

  for (const headerName of HOP_BY_HOP_RESPONSE_HEADERS) {
    responseHeaders.delete(headerName);
  }

  return new Response(backendResponse.body, {
    status: backendResponse.status,
    statusText: backendResponse.statusText,
    headers: responseHeaders,
  });
}

export async function GET(request: Request, context: RouteContext) {
  return forward(request, context);
}

export async function POST(request: Request, context: RouteContext) {
  return forward(request, context);
}

export async function PUT(request: Request, context: RouteContext) {
  return forward(request, context);
}

export async function PATCH(request: Request, context: RouteContext) {
  return forward(request, context);
}

export async function DELETE(request: Request, context: RouteContext) {
  return forward(request, context);
}

export async function HEAD(request: Request, context: RouteContext) {
  return forward(request, context);
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
    },
  });
}
