import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/glicid-docs/__docusaurus/debug',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug', '1ca'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/config',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/config', '34e'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/content',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/content', '2c1'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/globalData', '372'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/metadata', 'b3f'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/registry', 'c85'),
    exact: true
  },
  {
    path: '/glicid-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/glicid-docs/__docusaurus/debug/routes', 'eb4'),
    exact: true
  },
  {
    path: '/glicid-docs/blog',
    component: ComponentCreator('/glicid-docs/blog', 'ea1'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/archive',
    component: ComponentCreator('/glicid-docs/blog/archive', '936'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/first-blog-post',
    component: ComponentCreator('/glicid-docs/blog/first-blog-post', 'c6c'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/long-blog-post',
    component: ComponentCreator('/glicid-docs/blog/long-blog-post', '112'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/mdx-blog-post',
    component: ComponentCreator('/glicid-docs/blog/mdx-blog-post', '041'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/tags',
    component: ComponentCreator('/glicid-docs/blog/tags', '8d9'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/tags/docusaurus',
    component: ComponentCreator('/glicid-docs/blog/tags/docusaurus', '2e7'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/tags/facebook',
    component: ComponentCreator('/glicid-docs/blog/tags/facebook', '349'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/tags/hello',
    component: ComponentCreator('/glicid-docs/blog/tags/hello', '9dd'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/tags/hola',
    component: ComponentCreator('/glicid-docs/blog/tags/hola', '431'),
    exact: true
  },
  {
    path: '/glicid-docs/blog/welcome',
    component: ComponentCreator('/glicid-docs/blog/welcome', '625'),
    exact: true
  },
  {
    path: '/glicid-docs/markdown-page',
    component: ComponentCreator('/glicid-docs/markdown-page', 'c46'),
    exact: true
  },
  {
    path: '/glicid-docs/docs',
    component: ComponentCreator('/glicid-docs/docs', 'e98'),
    routes: [
      {
        path: '/glicid-docs/docs/category/extras',
        component: ComponentCreator('/glicid-docs/docs/category/extras', 'e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/category/getting-started',
        component: ComponentCreator('/glicid-docs/docs/category/getting-started', '5a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/intro',
        component: ComponentCreator('/glicid-docs/docs/intro', '10b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/apptainers',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/apptainers', '9c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/cuda-python',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/cuda-python', '5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/guix',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/guix', '026'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/intro-hpc',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/intro-hpc', '422'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/linux-commands',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/linux-commands', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/markdown-features', 'e4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/request-access',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/request-access', '37e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/slurm',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/slurm', '53b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-basics/ssh',
        component: ComponentCreator('/glicid-docs/docs/tutorial-basics/ssh', 'f83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/glicid-docs/docs/tutorial-extras/manage-docs-versions', '818'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/glicid-docs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/glicid-docs/docs/tutorial-extras/translate-your-site', '1a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/glicid-docs/',
    component: ComponentCreator('/glicid-docs/', '46a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
