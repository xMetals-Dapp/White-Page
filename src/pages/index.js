import React, { useEffect, useState } from "react";
import theme from "theme";
import { Theme, Box, Image, Text, Button, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";



export default (() => {
  
		const [walletAddress, setWalletAddress] = useState("");
	
	 
		const connectWallet = async () => {
			if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
				try {
					const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
					/* get signer */
					setWalletAddress(accounts[0]);
					console.log(accounts[0]);

				} catch (err) {
					console.error(err.message);
				}
			} else {
				/* MetaMask is not installed */
				console.log("Please install MetaMask");
			}
		};
	 
		const getCurrentWalletConnected = async () => {
			if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
				try {
					/* get accounts */
					const accounts = await window.ethereum.request({method: "eth_requestAccounts"})		
					if (accounts.length > 0) {
						/* get signer */
						setWalletAddress(accounts[0]);
						console.log(accounts[0]);
					} else {
						console.log("Connect to MetaMask using the Connect button");
					}
				} catch (err) {
					console.error(err.message);
				}
			} else {
				/* MetaMask is not installed */
				console.log("Please install MetaMask");
			}
		};
	 
		const addWalletListener = async () => {
			if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
				window.ethereum.on("accountsChanged", (accounts) => {
					setWalletAddress(accounts[0]);
					console.log(accounts[0]);
				});
			} else {
				setWalletAddress("");
				console.log("Please install MetaMask");
			}
		};


		useEffect(() => {
			getCurrentWalletConnected();
			addWalletListener();
		});
	
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="24px 0 60px 0"
			md-padding="30px 0 30px 0"
			background="#23212D"
			flex-direction="column"
			align-items="center"
			justify-content="center"
			height="100%"
>
	<Override
		slot="SectionContent"
		flex-direction="column-reverse"
		md-flex-wrap="wrap"
		align-items="center"
		justify-content="space-around"
		height="640px"
		md-justify-content="space-around"
			/>
			<Box
				min-width="50px"
				min-height="100px"
				md-height="10px"
				md-width="100%"
				md-min-height={0}
				md-min-width={0}
			/>
			<Box
				flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				display="flex"
				justify-content="flex-start"
				md-width="100%"
				background="#2A2835"
				border-radius="30px"
				align-items="center"
				height="450px"
				lg-height="550px"
				md-height="400px"
				sm-height="500px"
				flex-wrap="wrap-reverse"
			>
				<Image src="https://uploads.quarkly.io/63ff9730b4ef240020700a3c/images/xMetals%20Icon.png?v=2023-03-01T18:27:35.996Z" display="block" width="200px" height="200px" />
				<Text
					margin="0px 0px 0px 0px"
					color="#fff"
					display="flex"
					flex-direction="column"
					font="30px sans-serif"
				>
					Welcome to xMetals
				</Text>
				<Box min-width="100px" min-height="25px" />
				<Box
					min-width="100px"
					width="80%"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="space-around"
					height="15%"
				>
					<Button
						display="inline-block"
						border-radius="18px"
						height="50px"
						width="200px"
						user-select="none"
						pointer-events="auto"
						background="#238DE0"
						hover-background="#238DE0"
						focus-background="#238DE0"
						active-background="#55535D"
						disabled={false}
						type="button"
						focus-box-shadow="0 0 0 0px --color-primary"
						onClick={connectWallet}

					>
 			{walletAddress && walletAddress.length > 0 ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
					</Button>
					<Box width="5%" />
				</Box>
				<Text margin="0px 0px 0px 0px" color="#D92F25">
				{walletAddress && walletAddress.length > 0 ? "You must be whitelisted to continue." : "" }
				</Text>
				<Box min-width="100px" min-height="10px" />
				<Link href="#" color="#238DE0" text-decoration-line="underline" href="https://www.google.com/">
				{walletAddress && walletAddress.length > 0 ? "Click here to complete whitelisting" : ""}
				</Link>
			</Box>
		</Section>
		<Section background="#23212D">
	<Box min-width="100px" min-height="300px" />
</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63ff9730b4ef240020700a3a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
