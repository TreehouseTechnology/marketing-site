# About page

## Adding a new team member

1. Create a new `.mdx` file in `team/` named `{firstName}-{lastName}.mdx`
2. Add a markdown comment at the top of the page with `name`, `role`, and `image` (optional `cvLink` and `cvLabel`):

   ```markdown
   ---
   name: Firstname Lastname
   role: Software Engineer
   image: /team/firstname.jpeg
   cvLink: https://example.com/firstname-cv
   cvLabel: CV
   ---
   ```

   - `cvLink` is optional. If provided, the team profile will render a linked `cvLabel` below the bio.
   - `cvLabel` is optional and can be `CV` or `Experience` (defaults to `CV`).

3. All remaining content should be the team members desired description. All markdown tags are encouraged.
