# Product page

## Adding a new product

1. Create a new `.mdx` file in `listings/` named `{product}.mdx`
2. Add a markdown comment at the top of the page with `title`, `link`, `linkText`, and `type`:

    ```markdown
    ---
title: Product Name
link: https://example.com
linkText: sign up
type: product
---
    ```

   Use `type: open-source` for public libraries, SDKs, or tools. The product listing UI reads this value and surfaces it as the listing label.

3. All remaining content should be the product description. All markdown tags are encouraged.
