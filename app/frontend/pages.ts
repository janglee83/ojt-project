// Import the layout directly for SSR to avoid dynamic imports

// Use import.meta.glob for client-side and import.meta.globEagerDefault for SSR
const pages = import.meta.env.SSR
  ? import.meta.globEagerDefault("./pages/**/*.vue")
  : import.meta.glob("./pages/**/*.vue");

export async function resolvePage(name) {
  const page = pages[`./pages/${name}.vue`];

  if (!page) {
    throw new Error(
      `Unknown page ${name}. Is it located under Pages with a .vue extension?`
    );
  }

  // Assign the layout directly for SSR, otherwise use dynamic import
  if (import.meta.env.SSR) {
    page.layout = page.layout || Layout;
    return page;
  } else {
    const resolvedPage = (await page()).default;
    // resolvedPage.layout = resolvedPage.layout || Layout;
    return resolvedPage;
  }
}
