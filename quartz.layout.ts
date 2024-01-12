import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const dateFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      github: "https://github.com/rapka/polemics-md",
      "i make music!": "https://collegehill.bandcamp.com/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "writings", // title of the explorer component
      folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: 'open', // default state of folders ("collapsed" or "open")
      useSavedState: true, // wether to use local storage to save "state" (which folders are opened) of explorer
      // Sort order: folders first, then files. Sort folders and files alphabetically
      sortFn: (a, b) => {
        const dateA = a?.file?.dates?.created;
        const dateB = b?.file?.dates?.created;

        return dateB - dateA;
      },
      // filterFn: (node) => node.name !== "tags", // filters out 'tags' folder
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            const date = node.file.dates?.created;
            const month = dateFormatter.format(date);
            const year = date.getFullYear()
            node.displayName = `[${month} ${year}] ${node.displayName})`;
          }
        }
      },
      // what order to apply functions in
      order: ["filter", "map", "sort"],
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
