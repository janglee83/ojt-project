import AppLayout from "./App.vue"; // Import the layout component

const pages = import.meta.env.SSR
  ? import.meta.globEager("./pages/**/*.vue")
  : import.meta.glob("./pages/**/*.vue");

export async function resolvePage(name) {
  const page = import.meta.env.SSR
    ? pages[`./pages/${name}.vue`]
    : await pages[`./pages/${name}.vue`]();

  if (!page) {
    throw new Error(
      `Unknown page ${name}. Is it located under Pages with a .vue extension?`
    );
  }

  // Assign the layout directly for SSR, otherwise use dynamic import
  if (import.meta.env.SSR) {
    page.layout = AppLayout; // Set the layout to AppLayout for SSR
    return page;
  } else {
    const resolvedPage = page.default;
    resolvedPage.layout = AppLayout; // Set the layout to AppLayout for client-side
    return resolvedPage;
  }
}
