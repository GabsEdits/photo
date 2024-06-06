// deno-fmt-ignore-file
// Keep the file data nicely aligned

import { Head as FreshHead } from "$fresh/runtime.ts";
import { absoluteUrl } from "../util/url.ts";
import { useEnv } from "../islands/EnvContext.tsx";

export interface HeadProps {
	thumbnail: string
}

export function Head({ thumbnail }: HeadProps) {
	const env = useEnv();

  return <FreshHead>
  	<meta charset="utf-8"/>
		<meta name="google" content="notranslate" />
		<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
		{env.ALLOW_INDEXING == "0" && <meta name="robots" content="noindex" />}
		<title data-title={env.TITLE}>{env.TITLE}</title>
		<link rel="alternate" type="application/rss+xml" title="RSS Feed" href={absoluteUrl("feed.xml", env.URL)}/>
		<meta property="og:title" content={env.TITLE}/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content={env.URL}/>
		<meta property="og:image" content={thumbnail}/>
		<meta property="og:site_name" content={env.TITLE}/>
		<meta property="og:description" content={env.DESCRIPTION}/>
		<meta name="thumbnail" content={thumbnail}/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content={env.TWITTER_USERNAME}/>
		<meta name="twitter:title" content={env.TITLE}/>
		<meta name="twitter:description" content={env.DESCRIPTION}/>
		<meta name="twitter:image:src" content={thumbnail}/>
		<meta name="description" content={env.DESCRIPTION}/>
		<link rel="stylesheet" type="text/css" media="screen" href="/css/master.css" />
		{env.ALLOW_IMAGE_SHARING && <link rel="stylesheet" type="text/css" href="/css/toastify.min.css"/>}
		<link rel="me" href="https://vmst.io/@gabs"/>
		<link rel="manifest" href="/site.webmanifest?v=1"/>
		<link rel="icon" href="/favicon.svg"/>
		<meta name="msapplication-TileColor" content="#603cba"/>
		<meta name="theme-color" content="#ffffff"/>
	</FreshHead>
}
