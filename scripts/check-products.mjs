import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { createServer } from 'vite';

const server = await createServer({
  configFile: false,
  appType: 'custom',
  optimizeDeps: { noDiscovery: true },
  server: { middlewareMode: true },
});

try {
  const {
    ProjectCategory,
    ProjectId,
    ProjectLifecycle,
    ProjectSurface,
    footerProducts,
    navigationProducts,
    projects,
    showcaseProjects,
  } = await server.ssrLoadModule('/data/products.ts');

  const expectedIds = new Set(Object.values(ProjectId));
  const actualIds = new Set(projects.map((project) => project.id));
  if (actualIds.size !== projects.length || actualIds.size !== expectedIds.size) {
    throw new Error('Project catalog IDs must be unique and exhaustive.');
  }

  for (const id of expectedIds) {
    if (!actualIds.has(id)) throw new Error(`Project catalog is missing ${id}.`);
  }

  for (const project of projects) {
    if (!project.surfaces.includes(ProjectSurface.Showcase) || !showcaseProjects.includes(project)) {
      throw new Error(`${project.id} must be visible in the showcase.`);
    }

    if (
      project.category === ProjectCategory.OwnService &&
      project.lifecycle === ProjectLifecycle.Live &&
      project.href &&
      !project.surfaces.includes(ProjectSurface.Footer)
    ) {
      throw new Error(`Live own-service product ${project.id} must be visible in the footer.`);
    }

    if (project.imageUrl.startsWith('/')) {
      await access(join(process.cwd(), 'public', project.imageUrl.slice(1)));
    }
  }

  for (const project of [...footerProducts, ...navigationProducts]) {
    if (!project.href) throw new Error(`${project.id} is linked from navigation without an href.`);
  }

  console.log(
    `Validated ${projects.length} catalog entries · ${footerProducts.length} footer products · ${navigationProducts.length} featured navigation product.`,
  );
} finally {
  await server.close();
}
