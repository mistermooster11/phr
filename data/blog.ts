export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/how-to-plan-a-kitchen-remodel/",
    image: "https://www.phr-ny.com/images/kitchen_carousel_1.jpg",
    date: "15",
    monthYear: "Mar '26",
    category: "Kitchen Remodeling",
    categoryHref: "/blog/category/kitchen-remodeling/",
    title: "How to Plan a Kitchen Remodel: What to Expect at Every Stage",
    excerpt:
      "A full kitchen remodel has five distinct phases. Understanding what happens at each stage helps you make better decisions, avoid surprises, and stay on schedule from demo day to final walkthrough.",
  },
  {
    slug: "/blog/signs-you-need-a-new-roof/",
    image: "https://www.phr-ny.com/images/masonry_carousel_1.jpg",
    date: "08",
    monthYear: "Mar '26",
    category: "Roofing",
    categoryHref: "/blog/category/roofing/",
    title: "5 Signs You Need a New Roof Before Winter",
    excerpt:
      "Most homeowners don't know their roof is failing until water appears inside. Here are five warning signs you can spot from the ground — and what to do if you see them.",
  },
  {
    slug: "/blog/bathroom-remodel-mistakes/",
    image: "https://www.phr-ny.com/images/bathroom_carousel_1.jpg",
    date: "22",
    monthYear: "Feb '26",
    category: "Bathroom Remodeling",
    categoryHref: "/blog/category/bathroom-remodeling/",
    title: "The 4 Most Common Bathroom Remodel Mistakes (And How to Avoid Them)",
    excerpt:
      "Bathroom remodels are where shortcuts become expensive problems. Learn the four most common mistakes homeowners make and how a proper build process prevents all of them.",
  },
];
