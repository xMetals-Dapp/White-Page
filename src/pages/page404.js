import React from "react";
import theme from "theme";
import { Theme, Box, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#232323"} />
		</Helmet>
		<Section background="#23212D" height="700px">
			<Box min-width="100px" height="5%" />
			<Text
				margin="0px 0px 0px 0px"
				height="50%"
				display="flex"
				flex-direction="column"
				align-items="center"
				color="#fff"
				font="40px sans-serif"
			>
				Error 404: Page Not Found
			</Text>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6166a2b829a0a1001e6ca5fb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script
				type={""}
				async={false}
				src={""}
				place={"endOfBody"}
				rawKey={"63e557ee91ffd30edad848d5"}
			/>
		</RawHtml>
	</Theme>;
});