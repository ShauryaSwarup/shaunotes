import React from "react";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";
import Card from "@site/src/components/Card";
import CardHeader from "@site/src/components/CardHeader";
import CardBody from "@site/src/components/CardBody";
import CardFooter from "@site/src/components/CardFooter";
import PostCard from "@site/src/components/PostCard";
export default {
  // Reusing the default mapping
  ...MDXComponents,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  PostCard
};
