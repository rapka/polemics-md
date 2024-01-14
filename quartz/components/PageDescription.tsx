import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageDescription({ fileData, cfg, displayClass }: QuartzComponentProps) {
  return cfg?.pageDescription ? (
    <h3 class={`page-description ${displayClass ?? ""}`}>
      {cfg.pageDescription}
    </h3>
  ) : null
}

PageDescription.css = `
.page-description {
  margin: 0;
}

.page-title + .page-description {
  margin-top: -1.5rem;
}
`

export default (() => PageDescription) satisfies QuartzComponentConstructor
