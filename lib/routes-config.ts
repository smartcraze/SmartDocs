
export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; 
  items?: EachRoute[];
};

// export const ROUTES: EachRoute[] = [
//   {
//     title: "Getting Started",
//     href: "/getting-started",
//     noLink: true,
//     items: [
//       { title: "Introduction", href: "/introduction" },
//       {
//         title: "Installation",
//         href: "/installation",
//       },
//       { title: "Quick Start Guide", href: "/quick-start-guide" },
//       {
//         title: "Project Structure",
//         href: "/project-structure",
//       },
//       {
//         title: "Components",
//         href: "/components",
//         items: [
//           { title: "Stepper", href: "/stepper" },
//           { title: "Tabs", href: "/tabs" },
//           { title: "Note", href: "/note" },
//           { title: "Code Block", href: "/code-block" },
//           { title: "Image & Link", href: "/image-link" },
//           { title: "Custom", href: "/custom" },
//         ],
//       },
//       { title: "Themes", href: "/themes" },
//       {
//         title: "Customize",
//         href: "/customize",
//       },
//     ],
//   },
//   {
//     title:"python",
//     href:"/python-test",
    
//   },
//   {
//     title:"Dsa",
//     href:"/dsa",
//     noLink:true,
//     items:[
//       {
//         title:"Vector",
//         href:"/vector",
//       }
//     ]
//   }

// ];
export const ROUTES: EachRoute[] = [
  {
    title:"DSA",
    href:"/dsa",
    noLink:true,
    items:
    [
      // {
      //   title:"Seaching",
      //   href:"/searching",
      // },
      // {
      //   title:"Sorting",
      //   href:"/sorting",
      // },
      // {
      //   title:"LinkedList",
      //   href:"/linkedlist",
      // },
      {
        title:"BST",
        href:"/bst",
      },
      {
        title:"Heap",
        href:"/heap",
        noLink:true,
        items:[
          {
            title:"MinHeap",
            href:"/minheap",
          },
          {
            title:"MaxHeap",
            href:"/maxheap",
          }
        ]
      },
      {
        title:"Graph",
        href:"/graph",
      }
      
    ]
  }

];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
