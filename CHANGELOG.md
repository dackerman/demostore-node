# Changelog

## 0.10.0 (2025-07-03)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/dackerman/demostore-node/compare/v0.9.0...v0.10.0)

### Features

* **client:** add support for endpoint-specific base URLs ([8a1e820](https://github.com/dackerman/demostore-node/commit/8a1e820da590d8b156a239e5b6d82b9c36e31acd))
* **mcp:** set X-Stainless-MCP header ([5bdc48e](https://github.com/dackerman/demostore-node/commit/5bdc48e8e9b56137a45e91e098ead69f1253c403))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([be1b358](https://github.com/dackerman/demostore-node/commit/be1b358fa0cb23c7b9e2842acb0522fd0bfed99b))
* **client:** don't send `Content-Type` for bodyless methods ([c33f33e](https://github.com/dackerman/demostore-node/commit/c33f33e9f31accc599d64cadef5bbb90c8e94a8e))
* **mcp:** define `.well-known/oauth-protected-resource` ([221cb37](https://github.com/dackerman/demostore-node/commit/221cb37c5eb237de7644892fb1a356fb850c1963))
* **mcp:** use correct character set in cloudflare worker name ([1545055](https://github.com/dackerman/demostore-node/commit/1545055de61407245be8016ef0f4b57e9d0ce9c3))
* publish script — handle NPM errors correctly ([3589d97](https://github.com/dackerman/demostore-node/commit/3589d97a69a8ecb2d0d223116a4329a0b752ea75))


### Chores

* **ci:** enable for pull requests ([724bdd9](https://github.com/dackerman/demostore-node/commit/724bdd95a47ce16a68daa7e1341228c3f048c9c4))
* **ci:** only run for pushes and fork pull requests ([6a5e0d1](https://github.com/dackerman/demostore-node/commit/6a5e0d19b181448846a75dd8aba1c998e62b7097))
* **internal:** codegen related update ([36ac07d](https://github.com/dackerman/demostore-node/commit/36ac07ddde5514479c97d3b93e8a0c7a348b90b3))
* **internal:** make base APIResource abstract ([509b8d7](https://github.com/dackerman/demostore-node/commit/509b8d7dfbb1a4a8d378fe285f74027d3a3bf054))
* mention unit type in timeout docs ([1b76c12](https://github.com/dackerman/demostore-node/commit/1b76c121e847f9582daa2913973983d2aa0059e7))

## 0.9.0 (2025-06-10)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/dackerman/demostore-node/compare/v0.8.0...v0.9.0)

### Features

* **api:** update via SDK Studio ([59e6d5c](https://github.com/dackerman/demostore-node/commit/59e6d5c6e346ebd67cd26d6d872ad8a856b65e38))
* **api:** update via SDK Studio ([8c2d044](https://github.com/dackerman/demostore-node/commit/8c2d044e73d88a6042fcf4874474b2635f45c07b))
* **api:** update via SDK Studio ([7a8e0ef](https://github.com/dackerman/demostore-node/commit/7a8e0ef13b6c3ed10a4394a72101f19cbdc27eab))
* **api:** update via SDK Studio ([60860ce](https://github.com/dackerman/demostore-node/commit/60860ce8e90793136ee891541f79e952c3d1481f))
* **api:** update via SDK Studio ([192faab](https://github.com/dackerman/demostore-node/commit/192faab60fbe66bb0bb894384dab7e0232d8b689))
* **mcp:** implement support for binary responses ([040aac7](https://github.com/dackerman/demostore-node/commit/040aac7b88c1f4317af78bd1067af659183140b6))
* **mcp:** include http information in tools ([9d73f7b](https://github.com/dackerman/demostore-node/commit/9d73f7b0673721c9d821d95ac25d759fe784ff0b))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([37b8966](https://github.com/dackerman/demostore-node/commit/37b89663fb3a0fd9aedb67408df47c5c8d9f158e))
* **mcp:** include description in dynamic tool search ([1c5c48f](https://github.com/dackerman/demostore-node/commit/1c5c48f4decb7cb49c1953c5492d2bd36f3c6782))


### Chores

* **docs:** grammar improvements ([7442a23](https://github.com/dackerman/demostore-node/commit/7442a2385bcd4dad4446dd36f399596a24469fc3))
* **docs:** use top-level-await in example snippets ([bbad55f](https://github.com/dackerman/demostore-node/commit/bbad55faf63c79576df98a02c13df7fca41f7ad5))
* improve publish-npm script --latest tag logic ([d9fd0d6](https://github.com/dackerman/demostore-node/commit/d9fd0d6f6aac2b924d2c8e8de864c1166e57a056))
* **mcp:** provides high-level initMcpServer function and exports known clients ([f13c1f0](https://github.com/dackerman/demostore-node/commit/f13c1f029f78bbcde0ba68e7864130e3699e3b5b))
* **mcp:** remove duplicate assignment ([7bd6d74](https://github.com/dackerman/demostore-node/commit/7bd6d74a393a5d55d7ae02c14598ad968c5cd1a7))

## 0.8.0 (2025-05-12)

Full Changelog: [v0.7.1...v0.8.0](https://github.com/dackerman/demostore-node/compare/v0.7.1...v0.8.0)

### Features

* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([e7c6630](https://github.com/dackerman/demostore-node/commit/e7c66308b86b57dc6cbce0321ad2a0e814ec4c84))
* more gracefully handle $refs and work around schema limitations ([96054d4](https://github.com/dackerman/demostore-node/commit/96054d41792b19bd311b21651f61b8f16736f5b2))


### Bug Fixes

* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([40664a4](https://github.com/dackerman/demostore-node/commit/40664a4081f0519ffd6bd96c7cfee11648b1a06d))
* **mcp:** fix readEnv type error ([b7c6723](https://github.com/dackerman/demostore-node/commit/b7c67238fed07685aaf7228dff77c9467fad36cc))
* **mcp:** include all necessary env vars in client instantiation ([c2d9de5](https://github.com/dackerman/demostore-node/commit/c2d9de58bd815561144385dd1d590632f2ee46ca))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([b3c1dbf](https://github.com/dackerman/demostore-node/commit/b3c1dbf7440c4352d5d4545bb5289eba0a7fe616))


### Chores

* **build:** automatically build subpackages if present ([ce33d7d](https://github.com/dackerman/demostore-node/commit/ce33d7da142cd913759d028e7be62d4994110843))
* **ci:** add timeout thresholds for CI jobs ([e259da7](https://github.com/dackerman/demostore-node/commit/e259da781704eee4a5a9815cbc733e325c813f4d))
* **ci:** bump node version for release workflows ([87a5287](https://github.com/dackerman/demostore-node/commit/87a5287c68c985ab43f9e7a7d91ad2abb1f9ef3e))
* **ci:** only use depot for staging repos ([88f3d9e](https://github.com/dackerman/demostore-node/commit/88f3d9e8336a9b75ffce2c62e900c581546728cc))
* **client:** minor internal fixes ([2558ef7](https://github.com/dackerman/demostore-node/commit/2558ef75a07b58795c85289aea33cc8d34600d4e))
* **internal:** codegen related update ([9e3e579](https://github.com/dackerman/demostore-node/commit/9e3e579892661d0ac78579c10efacf9b11a97772))
* **internal:** codegen related update ([15dfa16](https://github.com/dackerman/demostore-node/commit/15dfa16a48c5c229d63c8ad7efcf1e27c8e52db4))
* **internal:** codegen related update ([4533e6c](https://github.com/dackerman/demostore-node/commit/4533e6c76c9e242f6bb19df9301a2b7929114e83))
* **internal:** reduce CI branch coverage ([bb5337c](https://github.com/dackerman/demostore-node/commit/bb5337c952dd61ba2f11e578668a995e759048c1))
* **internal:** update dependency ([d55ae70](https://github.com/dackerman/demostore-node/commit/d55ae70db170265a8b78f68533a8498d960720f3))
* **internal:** upload builds and expand CI branch coverage ([3b95b79](https://github.com/dackerman/demostore-node/commit/3b95b7971ca77e3e92fb17c9bf39a1b4d6fde353))
* remove custom code ([291b99f](https://github.com/dackerman/demostore-node/commit/291b99fd5a548bd11ef7d005c52c4a5389ff712e))
* **tests:** use node 22 for CI tests ([816bc48](https://github.com/dackerman/demostore-node/commit/816bc4828781abaf95c08ecc357be8a44f410a7e))


### Documentation

* **readme:** fix typo ([9f0a5f9](https://github.com/dackerman/demostore-node/commit/9f0a5f9ff1b80a5b16879a4e8139e83eb459e35c))

## 0.7.1 (2025-04-09)

Full Changelog: [v0.7.0...v0.7.1](https://github.com/dackerman/demostore-node/compare/v0.7.0...v0.7.1)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#91](https://github.com/dackerman/demostore-node/issues/91)) ([41fed99](https://github.com/dackerman/demostore-node/commit/41fed99c6537ca5d1cb4ffee438db9df42e451e0))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#95](https://github.com/dackerman/demostore-node/issues/95)) ([7f0e71f](https://github.com/dackerman/demostore-node/commit/7f0e71f131098ae283d4326e9d3f1bebaa007756))
* **mcp:** remove debug logging ([#93](https://github.com/dackerman/demostore-node/issues/93)) ([ce0d414](https://github.com/dackerman/demostore-node/commit/ce0d4148b9660881f07dce212bda2e6c3c696c1e))


### Chores

* **internal:** version bump ([#89](https://github.com/dackerman/demostore-node/issues/89)) ([4ec7976](https://github.com/dackerman/demostore-node/commit/4ec797619ace8322fcdaeb1ff6904bea2b12e6ed))


### Documentation

* **mcp:** improve MCP readme docs ([#92](https://github.com/dackerman/demostore-node/issues/92)) ([9600b0e](https://github.com/dackerman/demostore-node/commit/9600b0eef4a96cc3d2648def61c703709c721dea))
* **mcp:** update env vars in README ([#94](https://github.com/dackerman/demostore-node/issues/94)) ([f260a73](https://github.com/dackerman/demostore-node/commit/f260a738ecff52411301fd5eea220cce0a21a4db))

## 0.7.0 (2025-04-03)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/dackerman/demostore-node/compare/v0.6.0...v0.7.0)

### Features

* **api:** update via SDK Studio ([#88](https://github.com/dackerman/demostore-node/issues/88)) ([08d6ce6](https://github.com/dackerman/demostore-node/commit/08d6ce606130bf55a7cf560bfeabd45ed9b843fa))
* **mcp:** handle recursive schemas ([#84](https://github.com/dackerman/demostore-node/issues/84)) ([9acc209](https://github.com/dackerman/demostore-node/commit/9acc2091acebe977991f124853a3d19bff59a794))
* **mcp:** support end-user filtering of tools, resources, and tags ([#86](https://github.com/dackerman/demostore-node/issues/86)) ([4eabca0](https://github.com/dackerman/demostore-node/commit/4eabca0add45164febff09feaa6359a5a7de61cf))


### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#85](https://github.com/dackerman/demostore-node/issues/85)) ([61a565b](https://github.com/dackerman/demostore-node/commit/61a565b240dfdb072ac3d893887f56912ac23661))


### Chores

* **internal:** add aliases for Record and Array ([#87](https://github.com/dackerman/demostore-node/issues/87)) ([8deb040](https://github.com/dackerman/demostore-node/commit/8deb040f1557995d413ebf29f134b58d6af88c6b))
* **internal:** version bump ([#82](https://github.com/dackerman/demostore-node/issues/82)) ([a469cde](https://github.com/dackerman/demostore-node/commit/a469cde02c03d53faee1ac03707a1aafd1e03d7d))

## 0.6.0 (2025-03-27)

Full Changelog: [v0.5.0-beta...v0.6.0](https://github.com/dackerman/demostore-node/compare/v0.5.0-beta...v0.6.0)

### Features

* **mcp:** export server and tools for more customizability ([#80](https://github.com/dackerman/demostore-node/issues/80)) ([83e28e5](https://github.com/dackerman/demostore-node/commit/83e28e50621425e3362d022f24c00a064049429c))


### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#81](https://github.com/dackerman/demostore-node/issues/81)) ([25fced5](https://github.com/dackerman/demostore-node/commit/25fced55b79d3aa6728d8298b02a24f334242f9c))

## 0.5.0-beta (2025-03-25)

Full Changelog: [v0.4.1-beta...v0.5.0-beta](https://github.com/dackerman/demostore-node/compare/v0.4.1-beta...v0.5.0-beta)

### Features

* **api:** update via SDK Studio ([#75](https://github.com/dackerman/demostore-node/issues/75)) ([898aac1](https://github.com/dackerman/demostore-node/commit/898aac1c5e229261ced5e18e242733537de56230))

## 0.4.1-beta (2025-03-25)

Full Changelog: [v0.4.0-beta...v0.4.1-beta](https://github.com/dackerman/demostore-node/compare/v0.4.0-beta...v0.4.1-beta)

### Features

* **api:** update via SDK Studio ([#72](https://github.com/dackerman/demostore-node/issues/72)) ([262b206](https://github.com/dackerman/demostore-node/commit/262b2062da53edebbcec6731bdb61691bc45d018))

## 0.4.0-beta (2025-03-25)

Full Changelog: [v0.3.0-beta...v0.4.0-beta](https://github.com/dackerman/demostore-node/compare/v0.3.0-beta...v0.4.0-beta)

### Features

* **api:** update via SDK Studio ([#67](https://github.com/dackerman/demostore-node/issues/67)) ([1523ecc](https://github.com/dackerman/demostore-node/commit/1523ecce97a4ab09cfa2955a353df90ac1c43375))
* **api:** update via SDK Studio ([#69](https://github.com/dackerman/demostore-node/issues/69)) ([435cd6b](https://github.com/dackerman/demostore-node/commit/435cd6b32b61cdcb93cc5a3f4c8780414001ef96))
* **api:** update via SDK Studio ([#70](https://github.com/dackerman/demostore-node/issues/70)) ([7a6a5d5](https://github.com/dackerman/demostore-node/commit/7a6a5d5429651272b992f27b0982e78a8cd0a0e0))
* **mcp:** allow opt-in mcp resources and endpoints ([#63](https://github.com/dackerman/demostore-node/issues/63)) ([bb455a2](https://github.com/dackerman/demostore-node/commit/bb455a2c98876d88ca67cc29d56283271aff4ba6))


### Bug Fixes

* avoid type error in certain environments ([#65](https://github.com/dackerman/demostore-node/issues/65)) ([f795f94](https://github.com/dackerman/demostore-node/commit/f795f944d668c107eb1cb3c81b72673bd9fb763f))


### Chores

* configure new SDK language ([#68](https://github.com/dackerman/demostore-node/issues/68)) ([cb08596](https://github.com/dackerman/demostore-node/commit/cb08596fa4e4354b2f4dd33b6a0c32bbe81bf037))

## 0.3.0-beta (2025-03-20)

Full Changelog: [v0.2.1...v0.3.0-beta](https://github.com/dackerman/demostore-node/compare/v0.2.1...v0.3.0-beta)

### Features

* **api:** update via SDK Studio ([#60](https://github.com/dackerman/demostore-node/issues/60)) ([12e7fea](https://github.com/dackerman/demostore-node/commit/12e7feadabf1e85396e64f64b3fb1de47434864d))

## 0.2.1 (2025-03-20)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/dackerman/demostore-node/compare/v0.2.0...v0.2.1)

### Chores

* **internal:** version bump ([#57](https://github.com/dackerman/demostore-node/issues/57)) ([e307f3a](https://github.com/dackerman/demostore-node/commit/e307f3a71771745f2e74a88c6f6ba2f84b25f8a2))

## 0.2.0 (2025-03-19)

Full Changelog: [v0.1.0-alpha.8...v0.2.0](https://github.com/dackerman/demostore-node/compare/v0.1.0-alpha.8...v0.2.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#37](https://github.com/dackerman/demostore-node/issues/37)) ([73b0ec7](https://github.com/dackerman/demostore-node/commit/73b0ec7698583d515a0afa2887c58717aa2a4cfb))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#45](https://github.com/dackerman/demostore-node/issues/45)) ([d211719](https://github.com/dackerman/demostore-node/commit/d211719d6a4118cf4d9d66d2488965e65903015a))
* **api:** update via SDK Studio ([#46](https://github.com/dackerman/demostore-node/issues/46)) ([e8f846d](https://github.com/dackerman/demostore-node/commit/e8f846d3de5ae5dd7d668c97cb8b281a4e5b385a))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))
* fix: release please ([18e0b70](https://github.com/dackerman/demostore-node/commit/18e0b704301940597f74602606a0e0f19175e16b))
* tweak dist stuff ([4bc201c](https://github.com/dackerman/demostore-node/commit/4bc201c7a29abd1e80022821b5eb90b1e09ac693))
* wip 03/18/25 08:18:18 PM ([6c85684](https://github.com/dackerman/demostore-node/commit/6c85684a11695fff4ce8dd5474e99d4956f4a228))
* wip 03/19/25 05:49:39 PM ([e32c718](https://github.com/dackerman/demostore-node/commit/e32c718c0536010b87a6d46a7584d0993c447591))
* wip 03/19/25 05:55:29 PM ([51346a9](https://github.com/dackerman/demostore-node/commit/51346a9e118123dfb8a64b15974b48a6fd79e468))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* release please ([4a0572b](https://github.com/dackerman/demostore-node/commit/4a0572b72e24b70776b4685964fc07e2480b9b7c))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))
* **release:** improve release process for the mcp-server sub-package ([#47](https://github.com/dackerman/demostore-node/issues/47)) ([a7de03a](https://github.com/dackerman/demostore-node/commit/a7de03a202719dc0e215bbb7ec0e13d93a37fa92))
* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))


### Chores

* **exports:** cleaner resource index imports ([#49](https://github.com/dackerman/demostore-node/issues/49)) ([49f91dd](https://github.com/dackerman/demostore-node/commit/49f91dd70d357a753ba1d4ed9a4d80363cd4b49e))
* **exports:** stop using path fallbacks ([#50](https://github.com/dackerman/demostore-node/issues/50)) ([49521c7](https://github.com/dackerman/demostore-node/commit/49521c7a8e8e51b313a0d9ea1725cb9c269d39bb))
* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* **internal:** version bump ([#42](https://github.com/dackerman/demostore-node/issues/42)) ([12ec6c3](https://github.com/dackerman/demostore-node/commit/12ec6c337b3e3d08109cc39ed88b65847993928b))
* **internal:** version bump ([#51](https://github.com/dackerman/demostore-node/issues/51)) ([1b21686](https://github.com/dackerman/demostore-node/commit/1b21686efc4c368f64513a332bfdd6309789ab37))
* **internal:** version bump ([#54](https://github.com/dackerman/demostore-node/issues/54)) ([158a85c](https://github.com/dackerman/demostore-node/commit/158a85ce00147947b7be21612df2103b67533cfa))
* remove custom code ([9fc6c67](https://github.com/dackerman/demostore-node/commit/9fc6c67dfdd8ce377c29a7bcde40e875bc66fc15))
* remove custom code ([1e5d53c](https://github.com/dackerman/demostore-node/commit/1e5d53c7d573ffc542c96cf33fe89069c431d037))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))

## 0.1.0-alpha.8 (2025-03-19)

Full Changelog: [demostore-v0.1.0-alpha.7...demostore-v0.1.0-alpha.8](https://github.com/dackerman/demostore-node/compare/demostore-v0.1.0-alpha.7...demostore-v0.1.0-alpha.8)

### Features

* wip 03/19/25 05:49:39 PM ([e32c718](https://github.com/dackerman/demostore-node/commit/e32c718c0536010b87a6d46a7584d0993c447591))


### Chores

* **internal:** version bump ([#51](https://github.com/dackerman/demostore-node/issues/51)) ([1b21686](https://github.com/dackerman/demostore-node/commit/1b21686efc4c368f64513a332bfdd6309789ab37))

## 0.1.0-alpha.7 (2025-03-19)

Full Changelog: [demostore-v0.1.0-alpha.6...demostore-v0.1.0-alpha.7](https://github.com/dackerman/demostore-node/compare/demostore-v0.1.0-alpha.6...demostore-v0.1.0-alpha.7)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#37](https://github.com/dackerman/demostore-node/issues/37)) ([73b0ec7](https://github.com/dackerman/demostore-node/commit/73b0ec7698583d515a0afa2887c58717aa2a4cfb))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#45](https://github.com/dackerman/demostore-node/issues/45)) ([d211719](https://github.com/dackerman/demostore-node/commit/d211719d6a4118cf4d9d66d2488965e65903015a))
* **api:** update via SDK Studio ([#46](https://github.com/dackerman/demostore-node/issues/46)) ([e8f846d](https://github.com/dackerman/demostore-node/commit/e8f846d3de5ae5dd7d668c97cb8b281a4e5b385a))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))
* fix: release please ([18e0b70](https://github.com/dackerman/demostore-node/commit/18e0b704301940597f74602606a0e0f19175e16b))
* tweak dist stuff ([4bc201c](https://github.com/dackerman/demostore-node/commit/4bc201c7a29abd1e80022821b5eb90b1e09ac693))
* wip 03/18/25 08:18:18 PM ([6c85684](https://github.com/dackerman/demostore-node/commit/6c85684a11695fff4ce8dd5474e99d4956f4a228))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* release please ([4a0572b](https://github.com/dackerman/demostore-node/commit/4a0572b72e24b70776b4685964fc07e2480b9b7c))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))
* **release:** improve release process for the mcp-server sub-package ([#47](https://github.com/dackerman/demostore-node/issues/47)) ([a7de03a](https://github.com/dackerman/demostore-node/commit/a7de03a202719dc0e215bbb7ec0e13d93a37fa92))
* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))


### Chores

* **exports:** cleaner resource index imports ([#49](https://github.com/dackerman/demostore-node/issues/49)) ([49f91dd](https://github.com/dackerman/demostore-node/commit/49f91dd70d357a753ba1d4ed9a4d80363cd4b49e))
* **exports:** stop using path fallbacks ([#50](https://github.com/dackerman/demostore-node/issues/50)) ([49521c7](https://github.com/dackerman/demostore-node/commit/49521c7a8e8e51b313a0d9ea1725cb9c269d39bb))
* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* **internal:** version bump ([#42](https://github.com/dackerman/demostore-node/issues/42)) ([12ec6c3](https://github.com/dackerman/demostore-node/commit/12ec6c337b3e3d08109cc39ed88b65847993928b))
* remove custom code ([9fc6c67](https://github.com/dackerman/demostore-node/commit/9fc6c67dfdd8ce377c29a7bcde40e875bc66fc15))
* remove custom code ([1e5d53c](https://github.com/dackerman/demostore-node/commit/1e5d53c7d573ffc542c96cf33fe89069c431d037))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))

## 0.1.0-alpha.6 (2025-03-19)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/dackerman/demostore-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#37](https://github.com/dackerman/demostore-node/issues/37)) ([73b0ec7](https://github.com/dackerman/demostore-node/commit/73b0ec7698583d515a0afa2887c58717aa2a4cfb))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))
* fix: release please ([18e0b70](https://github.com/dackerman/demostore-node/commit/18e0b704301940597f74602606a0e0f19175e16b))
* tweak dist stuff ([4bc201c](https://github.com/dackerman/demostore-node/commit/4bc201c7a29abd1e80022821b5eb90b1e09ac693))
* wip 03/18/25 08:18:18 PM ([6c85684](https://github.com/dackerman/demostore-node/commit/6c85684a11695fff4ce8dd5474e99d4956f4a228))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* release please ([4a0572b](https://github.com/dackerman/demostore-node/commit/4a0572b72e24b70776b4685964fc07e2480b9b7c))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))
* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))


### Chores

* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* remove custom code ([1e5d53c](https://github.com/dackerman/demostore-node/commit/1e5d53c7d573ffc542c96cf33fe89069c431d037))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))

## 0.1.0-alpha.5 (2025-03-19)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/dackerman/demostore-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))
* fix: release please ([18e0b70](https://github.com/dackerman/demostore-node/commit/18e0b704301940597f74602606a0e0f19175e16b))
* tweak dist stuff ([4bc201c](https://github.com/dackerman/demostore-node/commit/4bc201c7a29abd1e80022821b5eb90b1e09ac693))
* wip 03/18/25 08:18:18 PM ([6c85684](https://github.com/dackerman/demostore-node/commit/6c85684a11695fff4ce8dd5474e99d4956f4a228))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* release please ([4a0572b](https://github.com/dackerman/demostore-node/commit/4a0572b72e24b70776b4685964fc07e2480b9b7c))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))
* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))


### Chores

* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))

## 0.1.0-alpha.4 (2025-03-18)

Full Changelog: [demostore-v0.1.0-alpha.3...demostore-v0.1.0-alpha.4](https://github.com/dackerman/demostore-node/compare/demostore-v0.1.0-alpha.3...demostore-v0.1.0-alpha.4)

### Features

* tweak dist stuff ([4bc201c](https://github.com/dackerman/demostore-node/commit/4bc201c7a29abd1e80022821b5eb90b1e09ac693))

## 0.1.0-alpha.3 (2025-03-18)

Full Changelog: [demostore-v0.1.0-alpha.2...demostore-v0.1.0-alpha.3](https://github.com/dackerman/demostore-node/compare/demostore-v0.1.0-alpha.2...demostore-v0.1.0-alpha.3)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))
* fix: release please ([18e0b70](https://github.com/dackerman/demostore-node/commit/18e0b704301940597f74602606a0e0f19175e16b))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))
* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))


### Chores

* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))

## 0.1.0-alpha.2 (2025-03-18)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/dackerman/demostore-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Bug Fixes

* **release:** set a more precise version for the mcp client dependency ([a850f87](https://github.com/dackerman/demostore-node/commit/a850f87258b057ea25f40acd550566762d829d58))

## 0.1.0-alpha.1 (2025-03-18)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/dackerman/demostore-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#8](https://github.com/dackerman/demostore-node/issues/8)) ([fd7b749](https://github.com/dackerman/demostore-node/commit/fd7b7492518469bf78a475dfdc452da7f1ee6aec))
* **api:** add beta MCP support ([#17](https://github.com/dackerman/demostore-node/issues/17)) ([fa89c48](https://github.com/dackerman/demostore-node/commit/fa89c4899b883492364a054d13cc675c8738cb2a))
* **api:** update via SDK Studio ([#12](https://github.com/dackerman/demostore-node/issues/12)) ([90f5813](https://github.com/dackerman/demostore-node/commit/90f58132c7b5387f1ec9193b5dce3a676a1a0e1d))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/demostore-node/issues/13)) ([76add4f](https://github.com/dackerman/demostore-node/commit/76add4f1d99e777dafbbc6810fded0cfcee1dc45))
* **api:** update via SDK Studio ([#14](https://github.com/dackerman/demostore-node/issues/14)) ([6011dc8](https://github.com/dackerman/demostore-node/commit/6011dc8b8bd549fd58c25abb6e824644dea8955b))
* **api:** update via SDK Studio ([#16](https://github.com/dackerman/demostore-node/issues/16)) ([678d1c6](https://github.com/dackerman/demostore-node/commit/678d1c62c1bd3ad17bebf1245d48f68237a93251))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/demostore-node/issues/4)) ([20d05ca](https://github.com/dackerman/demostore-node/commit/20d05ca92af02e5f4403d9ebe0443fac4acc70c0))
* **api:** update via SDK Studio ([#5](https://github.com/dackerman/demostore-node/issues/5)) ([a8100e8](https://github.com/dackerman/demostore-node/commit/a8100e87aa7fe6294c799b6baa4adca464be1a4b))
* **client:** accept RFC6838 JSON content types ([#9](https://github.com/dackerman/demostore-node/issues/9)) ([9dab322](https://github.com/dackerman/demostore-node/commit/9dab322871b851ce189a6ac75d71f459594a77d7))


### Bug Fixes

* **client:** fix export map for index exports ([#3](https://github.com/dackerman/demostore-node/issues/3)) ([a94b9f1](https://github.com/dackerman/demostore-node/commit/a94b9f19d5524a5838e10d9825ed851166b4f2a3))
* **exports:** ensure resource imports don't require /index ([#11](https://github.com/dackerman/demostore-node/issues/11)) ([bcc9099](https://github.com/dackerman/demostore-node/commit/bcc9099bc9e73da11dd94e3207036ab5fe93ec86))
* **release:** fix release dispatch inputs ([#19](https://github.com/dackerman/demostore-node/issues/19)) ([e920a33](https://github.com/dackerman/demostore-node/commit/e920a3362f8d3cd619dcf7e534042174e056fabf))


### Chores

* go live ([7e97aa7](https://github.com/dackerman/demostore-node/commit/7e97aa77235d7d4233406269fb57e709459ac509))
* **internal:** fix devcontainers setup ([#6](https://github.com/dackerman/demostore-node/issues/6)) ([8e006c7](https://github.com/dackerman/demostore-node/commit/8e006c74a8b3aa46930c8bc07d9f7c5a6b6edeec))
* **internal:** remove extra empty newlines ([#10](https://github.com/dackerman/demostore-node/issues/10)) ([a79b798](https://github.com/dackerman/demostore-node/commit/a79b7988301c3774e3d11ced37c4cc2c3c17bb4c))
* update SDK settings ([#1](https://github.com/dackerman/demostore-node/issues/1)) ([ec920a1](https://github.com/dackerman/demostore-node/commit/ec920a140fc7c669cdc3066f3eea26e74095fe95))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/dackerman/demostore-node/issues/7)) ([561b55a](https://github.com/dackerman/demostore-node/commit/561b55aa4952788c921e8379d0d9d6592ac1b48e))
