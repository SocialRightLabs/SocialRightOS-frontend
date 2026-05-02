import assert from "node:assert/strict";
import test from "node:test";
import type { EligibilityCheckResponse, IncomeEvaluationResponse } from "./types.ts";
import { buildLocalApiPayload } from "./local-api-fallback.ts";

test("local fallback resolves GSS requests", () => {
  const result = buildLocalApiPayload(["v1", "eligibility-check"], {
    benefit_code: "TR_GSS",
    facts: {
      gross_household_income: 12000,
      household_size: 3,
      has_social_security: false,
      has_active_insurance: false,
      is_covered_as_dependent: false,
    },
  });

  assert.ok(result);
  const typed = result as EligibilityCheckResponse;
  assert.equal(typed.status, "ELIGIBLE");
  assert.equal(typed.benefit_id, "TR_GSS");
  const firstReason = typed.reasons[0];
  assert.ok(firstReason);
  assert.match(firstReason!.code, /income_/i);
});

test("local fallback resolves old age requests", () => {
  const result = buildLocalApiPayload(["v1", "eligibility-check"], {
    benefit_code: "TR_OLD_AGE_PENSION",
    facts: {
      age: 67,
      self_monthly_income: 4000,
      has_spouse: false,
      has_social_security: false,
      receives_pension: false,
    },
  });

  assert.ok(result);
  const typed = result as EligibilityCheckResponse;
  assert.equal(typed.status, "ELIGIBLE");
  assert.equal(typed.benefit_id, "TR_OLD_AGE_PENSION");
});

test("local fallback resolves income tests", () => {
  const result = buildLocalApiPayload(["evaluate", "income"], {
    household_size: 4,
    total_income: 24000,
  });

  assert.ok(result);
  const typed = result as IncomeEvaluationResponse;
  assert.equal(typed.status, "ELIGIBLE");
  assert.equal(typed.per_capita_income, 6000);
  assert.equal(typed.threshold, 6667);
});
