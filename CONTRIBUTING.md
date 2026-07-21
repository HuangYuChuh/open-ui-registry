# Contributing

Open UI Registry accepts component proposals, adaptations, quality improvements, documentation, and infrastructure changes.

## Proposing a component

Open a component proposal and provide:

1. The original demo and source URLs.
2. The author or organization.
3. The exact license and where it is declared.
4. The product or interaction problem the component solves.
5. Its framework, styling approach, and runtime dependencies.
6. Any known accessibility, responsive, SSR, or performance limitations.

Do not submit copied source when the license is missing or unclear.

## Acceptance workflow

```text
Proposal
  -> provenance and license review
  -> technical fit review
  -> React and TypeScript adaptation
  -> token and API normalization
  -> preview and automated checks
  -> registry metadata validation
  -> maintainer review
  -> verified publication
```

## Component requirements

An accepted component must include:

- source code;
- a preview or demo;
- usage documentation;
- complete Registry metadata;
- dependency declarations;
- attribution and license information;
- responsive and accessibility notes;
- tests required by its interaction risk.

## Modification transparency

If upstream code is modified, record the change in both the component metadata and `THIRD_PARTY_NOTICES.md`. Examples include converting JavaScript to TypeScript, replacing a styling system, changing the public API, removing a dependency, or correcting accessibility behavior.

## Review principle

A component is reviewed as a production dependency, not only as a visual demo. Maintainers may reject a component because of unclear licensing, excessive dependency cost, poor accessibility, fragile behavior, or overlap with an existing component.
