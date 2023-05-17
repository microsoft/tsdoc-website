---
layout: page
title: '@alpha'
navigation_source: docs_nav
---

| Standardization: | [Discretionary]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Suggested meaning

Designates that an API item's release stage is "alpha". It is intended to be used by
third-party developers eventually, but has not yet been released.  The tooling may trim the declaration from
a public release.


## Example

```ts
/**
 * Represents a book in the catalog.
 * @public
 */
export class Book {
  /**
   * The title of the book.
   * @alpha
   */
  public get title(): string;

  /**
   * The author of the book.
   */
  public get author(): string;
};
```

In this example, `Book.author` inherits its `@public` designation from the containing class,
whereas `Book.title` is marked as "alpha".


## See also

- [@beta]({% link pages/tags/beta.md %}) tag
- [@experimental]({% link pages/tags/experimental.md %}) tag
- [@internal]({% link pages/tags/internal.md %}) tag
- [@public]({% link pages/tags/public.md %}) tag
- [Trimming based on release tags](https://api-extractor.com/pages/setup/configure_rollup/#trimming-based-on-release-tags):
  a reference implementation of this feature
