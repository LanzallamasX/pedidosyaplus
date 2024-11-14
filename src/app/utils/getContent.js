export async function getContent(locale) {
    try {
      const content = await import(`../locales/${locale}/home.json`);
      return content.default;
    } catch (error) {
      console.error("Error loading locale content:", error);
      const defaultContent = await import(`../locales/default/home.json`);
      return defaultContent.default;
    }
  }
  