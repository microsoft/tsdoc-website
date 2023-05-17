---
layout: page
title: '@sealed'
navigation_source: docs_nav
---

| Standardization: | [Extended]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Usage

This modifier has similar semantics to the `sealed` keyword in C# or Java.  For a class, indicates that
subclasses must not inherit from the class.  For a member function or property, indicates that subclasses
must not override (i.e. redefine) the member.

A documentation tool may enforce that the `@virtual`, `@override`, and/or `@sealed` modifiers are consistently
applied, but this is not required by the TSDoc standard.


## Example

In the code sample below, `Child.render()` overrides the virtual member `Base.render()`,
but `Base.initialize()` must not be overridden because it is marked as "sealed".

```ts
class Base {
  /** @virtual */
  public render(): void {
  }

  /** @sealed */
  public initialize(): void {
  }
}

class Child extends Base {
  /** @override */
  public render(): void;
}
```


## See also

- [@override]({% link pages/tags/override.md %}) tag
- [@virtual]({% link pages/tags/virtual.md %}) tag
- [C# reference: sealed](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed):
  an equivalent feature from another programming language
