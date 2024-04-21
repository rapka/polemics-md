import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

  // --color-tone-1: #000000;
  // --color-tone-2: #787c7e;
  // --color-tone-3: #878a8c;
  // --color-tone-4: #d3d6da;
  // --color-tone-5: #edeff1;
  // --color-tone-6: #f6f7f8;
  // --color-tone-7: #ffffff;

  // --lightGray: #d8d8d8;
  // --gray: #86888a;
  // --darkGray: #939598;
  // --white: #fff;
  // --black: #212121;

  // --pink: #F03E88;
  // --green: #3EF088;
  // --darkGreen: #3ED088;
  // --purple: #F023F0;
  // --codeGrey: hsl(210, 8%, 30%);
  // --dullGrey: #8b949e;

const config: QuartzConfig = {
  configuration: {
    pageTitle: "polemics.md",
    pageDescription: "writings and investigations in art, tech, & ai",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "polemics.md",
    ogImagePath: "static/og-image.png",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Cutive Mono",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f2f0f0",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#F03E88",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#F03E88",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
