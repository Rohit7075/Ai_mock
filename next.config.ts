import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 ignoreDuringBuilds:true
},
typescript:{
  ignoreBuildErrors:true,
}

export default nextConfig;
