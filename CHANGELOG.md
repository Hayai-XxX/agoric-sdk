# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.14.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.13.0...@agoric/sdk@2.14.0) (2021-03-16)


### Bug Fixes

* **ava-xs:** anchor match patterns ([c753779](https://github.com/Agoric/agoric-sdk/commit/c7537799e7feb868fcfe6d916fab626244519d32))
* changes needed for ag-setup-cosmos to be usable again ([4767bf5](https://github.com/Agoric/agoric-sdk/commit/4767bf5de61f34b050ec0ba54e61c802fd0ef12c))
* make separate 'test:xs' target, remove XS from 'test' target ([b9c1a69](https://github.com/Agoric/agoric-sdk/commit/b9c1a6987093fc8e09e8aba7acd2a1618413bac8)), closes [#2647](https://github.com/Agoric/agoric-sdk/issues/2647)
* **cosmic-swingset:** apply Far/Data as necessary ([#2567](https://github.com/Agoric/agoric-sdk/issues/2567)) ([92b63b6](https://github.com/Agoric/agoric-sdk/commit/92b63b6105c055b14bb5412c9ebf12f213896244)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018) [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **demo:** make demos robust against bigints in JSON.stringify ([c289502](https://github.com/Agoric/agoric-sdk/commit/c289502a922ce819a2890e3aa36c0fea8ef3b6be))
* **deployment:** bump up minimum node size to 4GB RAM ([030357c](https://github.com/Agoric/agoric-sdk/commit/030357cef635508a94c92f9f34ea93df045c2625))
* **marshal:** serialize empty objects as data, not pass-by-reference ([aeee1ad](https://github.com/Agoric/agoric-sdk/commit/aeee1adf561d44ed3bc738989be605b683b3b656)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **notifier:** add Far/Data to notifier ([#2565](https://github.com/Agoric/agoric-sdk/issues/2565)) ([49a6a8e](https://github.com/Agoric/agoric-sdk/commit/49a6a8ef765f0a6cc94d7f7b0a4b2e8ed71bce8e)), closes [#2545](https://github.com/Agoric/agoric-sdk/issues/2545) [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **sharing-service:** add Far to all pass-by-reference objects ([fffd37e](https://github.com/Agoric/agoric-sdk/commit/fffd37e5b60f87f34331dfd813b0e99ea0b196ee)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **store:** reject empty-object keys which might not retain identity ([c38a4dc](https://github.com/Agoric/agoric-sdk/commit/c38a4dc8aca910d8a4ed5500f56f19ccdd3b43d1)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **swingset:** add exit/vatstore syscalls to non-local vat workers ([35fceb1](https://github.com/Agoric/agoric-sdk/commit/35fceb1a74b4f659d18ff3d7d6e28660757c9fa6))
* clean up the autobench script and prefix the metrics ([adeeb08](https://github.com/Agoric/agoric-sdk/commit/adeeb08b62a69e01e3398b3c5b8a4ecf0735286a))
* let errorTaming default to safe ([#2304](https://github.com/Agoric/agoric-sdk/issues/2304)) ([57c1f4c](https://github.com/Agoric/agoric-sdk/commit/57c1f4cc3841ba9c6be89c01b022ca70eeedc776))
* **swingset:** allow Symbol.asyncIterator as a method name ([7947be7](https://github.com/Agoric/agoric-sdk/commit/7947be7803a3a3848079b271314c587508a3e5db)), closes [#2481](https://github.com/Agoric/agoric-sdk/issues/2481) [#2619](https://github.com/Agoric/agoric-sdk/issues/2619)
* **swingset:** remove Far/Remotable/getInterfaceOf from vatPowers ([c19a941](https://github.com/Agoric/agoric-sdk/commit/c19a9417ec995425eb67c8a2080b1b0e660420ef)), closes [#2637](https://github.com/Agoric/agoric-sdk/issues/2637)
* better ocap discipline ([eef6540](https://github.com/Agoric/agoric-sdk/commit/eef654080e7e45d04e9783f08e5216fc9dad54b9))
* bug [#2533](https://github.com/Agoric/agoric-sdk/issues/2533), problem deleting virtual objects ([3645430](https://github.com/Agoric/agoric-sdk/commit/3645430e11c8e38d4deac88bf14e60f4561b2441))
* don't keep autobench stats for multiple revisions ([dae985d](https://github.com/Agoric/agoric-sdk/commit/dae985d24b27f086da25d7f77c65de51853e693f))
* don't rely on OS exec semantics for agoric-cli; fork instead ([4820958](https://github.com/Agoric/agoric-sdk/commit/4820958ebfab4d91ba3481f884926217a861967d))
* eliminate redundant resolves in comms ([86057fc](https://github.com/Agoric/agoric-sdk/commit/86057fc807f769e947ec4e45a0abed76fa6ff481))
* fix ibids. test ibids and slots ([#2625](https://github.com/Agoric/agoric-sdk/issues/2625)) ([891d9fd](https://github.com/Agoric/agoric-sdk/commit/891d9fd236ca86b63947384064b675c52e960abd))
* golang/cosmos upgrades ([d18e9d3](https://github.com/Agoric/agoric-sdk/commit/d18e9d31de456b2c44a08f36e01bd4b6c2c237dc))
* properly type assert.typeof(xxx, 'object') ([4958636](https://github.com/Agoric/agoric-sdk/commit/49586365607175fd9f91896a66cf02ad14d93055))
* remove resolveToRemote plumbing for clist-outbound.js ([caa367d](https://github.com/Agoric/agoric-sdk/commit/caa367d9ca355feb82b79928cde8eb92b4c093bf))
* separate ibid tables ([#2596](https://github.com/Agoric/agoric-sdk/issues/2596)) ([e0704eb](https://github.com/Agoric/agoric-sdk/commit/e0704eb640a54ceec11b39fc924488108cb10cee))
* **agoric-cli:** remove package links before running yarn install ([9573d44](https://github.com/Agoric/agoric-sdk/commit/9573d4484143276c8bb5341c0984bc4bfe37f77c))
* **avaXS:** notDeepEqual confused false with throwing ([a1b7460](https://github.com/Agoric/agoric-sdk/commit/a1b74604a63b89dc499e58e72b8425effae0b809))
* **bundleSource:** patch acorn with defineProperty to avoid override ([#2549](https://github.com/Agoric/agoric-sdk/issues/2549)) ([0ee93e5](https://github.com/Agoric/agoric-sdk/commit/0ee93e56174c8b8b265cae4448b17f925d0e6840))
* **dapp-svelte-wallet:** add Far/Data annotations ([a826805](https://github.com/Agoric/agoric-sdk/commit/a826805d8734f6b5a02c0437726a87781e9ff0be)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **marshal:** add Data marker, tolerate its presence ([d7b190f](https://github.com/Agoric/agoric-sdk/commit/d7b190f340ba336bd0d76a2ca8ed4829f227be61))
* **marshal:** add placeholder warnings ([8499b8e](https://github.com/Agoric/agoric-sdk/commit/8499b8e4584f3ae155913f95614980a483c487e2))
* **slogger:** do not harden the data being recorded ([e75ef53](https://github.com/Agoric/agoric-sdk/commit/e75ef53f726c7e44eec4ad8cd7718471d03c326e)), closes [#2517](https://github.com/Agoric/agoric-sdk/issues/2517)
* **spawner:** add enough Far/Data to pass tests ([73e06cc](https://github.com/Agoric/agoric-sdk/commit/73e06cc83b8058bd4bd7f532020226613f1bb183)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **swingset:** more Far/Data on the network vat ([ce82afc](https://github.com/Agoric/agoric-sdk/commit/ce82afc47a4a135cbc71478ad0d1836ad79a21f0))
* **xsnap:** bounds checking in release builds ([c36f040](https://github.com/Agoric/agoric-sdk/commit/c36f04064ddb7c02bee78a1a07c0fe1fcd4b46d3))
* **xsnap:** freeze API surface ([8c2cc63](https://github.com/Agoric/agoric-sdk/commit/8c2cc63acb78f8a169c53804d64304e8e954f7df))
* **xsnap:** orderly fail-stop on heap exhaustion ([8ffbaa6](https://github.com/Agoric/agoric-sdk/commit/8ffbaa64bf48a63c34fac3245d117a8a6fa6731a))
* **xsnap:** shim HandledPromise before lockdown() ([7e8178a](https://github.com/Agoric/agoric-sdk/commit/7e8178aa4ed8bf300a9e20d46e0c6a51848160d7))
* **zoe:** add Far to periodObserver ([#2577](https://github.com/Agoric/agoric-sdk/issues/2577)) ([4c07722](https://github.com/Agoric/agoric-sdk/commit/4c0772262a4f6861836cc4e472e9c18d5219ad7f)), closes [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* **zoe:** annotate empty objects with Data or Far as appropriate ([7aaa6dc](https://github.com/Agoric/agoric-sdk/commit/7aaa6dccce257986f3e98241b670ee4cb8aae4ca)), closes [#2545](https://github.com/Agoric/agoric-sdk/issues/2545) [#2018](https://github.com/Agoric/agoric-sdk/issues/2018)
* enable autobench_* metrics ([d06a87b](https://github.com/Agoric/agoric-sdk/commit/d06a87bcb71cf150a5f9a7d383a0fa5d0c2dac69))
* fake needs to be more real to work outside SwingSet unit tests ([9871903](https://github.com/Agoric/agoric-sdk/commit/9871903a34899f2852e831aab4d1dadb2b6ae703))
* make init-basedir more tolerant to paths ([a7e15ff](https://github.com/Agoric/agoric-sdk/commit/a7e15ffd27cdb8497dc9a881103113ce7a1938fd))
* properly pin the Moddable SDK version ([58333e0](https://github.com/Agoric/agoric-sdk/commit/58333e069192267fc96e30bb5272edc03b3faa04))
* tag the golang semantic version when pushing tags ([d0ef793](https://github.com/Agoric/agoric-sdk/commit/d0ef79302d0c3a385608ea161786e049317a3a99))
* upgrade ses to 0.12.3 to avoid console noise ([#2552](https://github.com/Agoric/agoric-sdk/issues/2552)) ([f59f5f5](https://github.com/Agoric/agoric-sdk/commit/f59f5f58d1567bb11710166b1dbc80f25c39a04f))
* use git submodule update --init --checkout ([fd3965d](https://github.com/Agoric/agoric-sdk/commit/fd3965de6e578000975fa7cb521689f1872140d2))
* use os.homedir() to properly cope with Windows ([fcf93ad](https://github.com/Agoric/agoric-sdk/commit/fcf93ad6eb137d9a055995d1b369a0d23c925aff))
* weaken timer wakers to ERefs ([dda396f](https://github.com/Agoric/agoric-sdk/commit/dda396fbef9c407cf5c151ebdb783954c678ee08))
* **xs-worker:** handle bigint in testLog a la kernel.js ([b362d8b](https://github.com/Agoric/agoric-sdk/commit/b362d8b66562bd63690b6d27483fc5fa12c22bd6))
* work around Firefox's lack of Error.stackTraceLimit ([94eaa4a](https://github.com/Agoric/agoric-sdk/commit/94eaa4a0caaa15f4c609ffd06afc3651e4d0d3bc))
* **xsrepl:** pass command line args thru shell wrapper ([7679200](https://github.com/Agoric/agoric-sdk/commit/7679200fa6b37ec832d72d2662d6f098d4989f37))


### Features

* silence the vat logs for ag-chain-cosmos ([16cf2bb](https://github.com/Agoric/agoric-sdk/commit/16cf2bb7105cd5659a89d2c6e690a416e88df5c4))
* **autobench:** make metrics more regular; run more benchmarks ([a0ec399](https://github.com/Agoric/agoric-sdk/commit/a0ec3997f05ecc6b30fea8524a6e2742c3a33bf8))
* **autobench:** rewrite in JS ([b4dd503](https://github.com/Agoric/agoric-sdk/commit/b4dd5033db0ccdf88604f31b8924e07a57bee45a))
* **ava-xs:** -m title match support ([e89f1e1](https://github.com/Agoric/agoric-sdk/commit/e89f1e1b716b38f9762d4fef914135c4b0078ced))
* **ava-xs:** handle some zoe tests ([#2573](https://github.com/Agoric/agoric-sdk/issues/2573)) ([7789834](https://github.com/Agoric/agoric-sdk/commit/7789834f7d232e395a707c5117295b768ed3fcff)), closes [#2503](https://github.com/Agoric/agoric-sdk/issues/2503)
* **deployment:** allow networks to init new placements ([13d6c2c](https://github.com/Agoric/agoric-sdk/commit/13d6c2ccc500cbc05c51790b09d218fa2e1f0f29))
* **marshal:** allow marshalSaveError function to be specified ([c93bb04](https://github.com/Agoric/agoric-sdk/commit/c93bb046aecf476dc9ccc537671a14f446b89ed4))
* **SwingSet:** direct liveslots errors to a different console ([9eec3e3](https://github.com/Agoric/agoric-sdk/commit/9eec3e31d85da9467b5bfda69851c11b817e8611))
* add static amountMath. Backwards compatible with old amountMath ([#2561](https://github.com/Agoric/agoric-sdk/issues/2561)) ([1620307](https://github.com/Agoric/agoric-sdk/commit/1620307ee1b45033032617cc14dfabfb338b0dc2))
* default new purses to autodeposit ([b210b4b](https://github.com/Agoric/agoric-sdk/commit/b210b4b918e8e67ab241d5d0c8907b437e58fc6c))
* eslint 'use jessie'; detection and first cut at rules ([9ea9909](https://github.com/Agoric/agoric-sdk/commit/9ea99097336ade6bb5645b06a1714e38c7185864))
* **xsnap:** ava work-alike ([2c71b4a](https://github.com/Agoric/agoric-sdk/commit/2c71b4a96b246bcbf89ba1bbb4a44737babccba9))
* **xsnap:** deep stacks work with updated moddable error stacks ([#2579](https://github.com/Agoric/agoric-sdk/issues/2579)) ([6a8fc76](https://github.com/Agoric/agoric-sdk/commit/6a8fc7646eeab48b176b44ebaca115ed9afa7966))
* allow fresh access tokens to override stale ones ([98acaee](https://github.com/Agoric/agoric-sdk/commit/98acaeed7f3d33a7f4631292b9187e3b4a1df7b6))
* declarative environments import for SwingSet, zoe tests ([#2580](https://github.com/Agoric/agoric-sdk/issues/2580)) ([bb0e7d6](https://github.com/Agoric/agoric-sdk/commit/bb0e7d604a9d789f9df0c6863e79a039f3b2f052))
* enable comms starting ID to be configurable in comms vats ([6c0b4d8](https://github.com/Agoric/agoric-sdk/commit/6c0b4d8e9b2e75931351b67390e0aebc9c90a0e9))
* implement a mock virtual object manager to support unit tests outside SwingSet ([d4f5025](https://github.com/Agoric/agoric-sdk/commit/d4f50257e1b7fb6812590c9cf806279ec518841b))
* push metrics from autobench ([3efc212](https://github.com/Agoric/agoric-sdk/commit/3efc21206ab6693abe94a4b7d2946b50e29983a9))
* **marshal:** add Data() to all unserialized empty records ([946fd6f](https://github.com/Agoric/agoric-sdk/commit/946fd6f1b811c55ee39668100755db24f1b52329))
* **marshal:** Data({}) is pass-by-copy ([03d7b5e](https://github.com/Agoric/agoric-sdk/commit/03d7b5eed8ecd3f24725d6ea63919f4398d8a2f8))
* **xsnap:** unhandled rejections are debuggable ([cbf83be](https://github.com/Agoric/agoric-sdk/commit/cbf83beffbbb57d49a9d945b1b1d975731d4f293))





# [2.13.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.12.1...@agoric/sdk@2.13.0) (2021-02-22)


### Bug Fixes

* **agoric-cli:** Allow path.sep to be \ when we use it in a RegExp ([c0ed576](https://github.com/Agoric/agoric-sdk/commit/c0ed5769d292a7842e5047a002e4410e91735045))
* **agoric-cli:** Don't exit agoric open until the browser loads ([a28548b](https://github.com/Agoric/agoric-sdk/commit/a28548b50912f3b0303594bbd94bd945d46a6caf))
* **bundle-source:** Downgrade @rollup/plugin-commonjs for Windows ([2721da7](https://github.com/Agoric/agoric-sdk/commit/2721da770aad3077f1024b71c217883f31461641))
* **cosmic-swingset:** Use 'junction' symlinks for directories ([1446df8](https://github.com/Agoric/agoric-sdk/commit/1446df8dfad115ef9a5a47349cd0b4c4d8a14e7b))
* **xsnap:** lib directory was missing from package files ([5bd8eb8](https://github.com/Agoric/agoric-sdk/commit/5bd8eb848a348877c1674fd8ce55bbc1ae37986a))
* be tolerant of delegation errors ([db75f65](https://github.com/Agoric/agoric-sdk/commit/db75f651f8742340714264848c3cfb12ee72a16f))
* properly docker push agoric/deployment:$(TAG) ([8afd58b](https://github.com/Agoric/agoric-sdk/commit/8afd58b5f9c1552ca564433c1cfd6f61b8f6cf2a))
* protect testLog against BigInts ([60c4684](https://github.com/Agoric/agoric-sdk/commit/60c468477de3c24dbf39866e010f3ea22cbb195a))
* remove journalbeat from build; it fails and we don't use it ([c2fed3b](https://github.com/Agoric/agoric-sdk/commit/c2fed3b2992385c5e20d9c8f26507089b546c5a3))


### Features

* bump to cosmos-sdk v0.41.1 ([7e45aa4](https://github.com/Agoric/agoric-sdk/commit/7e45aa44e89f39ccaaf620bc2f75d4ff9302898c))





# [2.12.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.11.0...@agoric/sdk@2.12.0) (2021-02-16)


### Bug Fixes

* **marshal:** reject getters in pass-by-ref, even if it returns a function ([#2438](https://github.com/Agoric/agoric-sdk/issues/2438)) ([b9368b6](https://github.com/Agoric/agoric-sdk/commit/b9368b6ee16a5562a622551539eff2b8708f0fdd)), closes [#2436](https://github.com/Agoric/agoric-sdk/issues/2436)
* adapt to new cosmos-sdk ([3b12c9e](https://github.com/Agoric/agoric-sdk/commit/3b12c9e2ef33117206189ecd085f51523c7d0d87))
* add a test and correct the collateral check ([#2300](https://github.com/Agoric/agoric-sdk/issues/2300)) ([2396e4d](https://github.com/Agoric/agoric-sdk/commit/2396e4d354cdf19aa35316883377b03a44514f5e))
* add more metrics ([e3223fb](https://github.com/Agoric/agoric-sdk/commit/e3223fb25a672e002128e9a4d13d3a0da62cb872))
* be more tolerant of errors ([967832e](https://github.com/Agoric/agoric-sdk/commit/967832e17010b0fec30a0bf80d2cb740406c4dbb))
* cleanups and simplifications ([1fe4eae](https://github.com/Agoric/agoric-sdk/commit/1fe4eae27cbe6e97b5f905d921d3e72d167cd108))
* complain if metering is requested but not compiled in ([857d4ba](https://github.com/Agoric/agoric-sdk/commit/857d4ba44eb93fc4f07608255232ca8c2ede7bc0))
* configure go relayer properly with add-paths ([7f2bd5b](https://github.com/Agoric/agoric-sdk/commit/7f2bd5bb41435a97bdb6256dc7bdccb45bb390dc))
* don't hardcode XSNAP_VERSION; get it from package.json ([b418db5](https://github.com/Agoric/agoric-sdk/commit/b418db5773f40c695988b27149612835e75fcd44))
* exercise callNow in local-worker case ([c3c489e](https://github.com/Agoric/agoric-sdk/commit/c3c489e62867a86d8c9e2e66812eb55e7295c8ec)), closes [#1617](https://github.com/Agoric/agoric-sdk/issues/1617)
* explicit setting in test-sanity ([#2388](https://github.com/Agoric/agoric-sdk/issues/2388)) ([6be4e02](https://github.com/Agoric/agoric-sdk/commit/6be4e0212d19a542ead6cd4bcef4cb6688a9d7d3))
* Far and Remotable do unverified local marking rather than WeakMap ([#2361](https://github.com/Agoric/agoric-sdk/issues/2361)) ([ab59ab7](https://github.com/Agoric/agoric-sdk/commit/ab59ab779341b9740827b7c4cca4680e7b7212b2))
* git should ignore xsnap/dist ([#2312](https://github.com/Agoric/agoric-sdk/issues/2312)) ([097f734](https://github.com/Agoric/agoric-sdk/commit/097f734abd3209ff55d0e78321efb1e0b160af20))
* hush "replaying transcripts" message during swingset startup ([#2394](https://github.com/Agoric/agoric-sdk/issues/2394)) ([9309dd9](https://github.com/Agoric/agoric-sdk/commit/9309dd99f68d17df7ca54ef561a9e6e383e1eb0e)), closes [#2277](https://github.com/Agoric/agoric-sdk/issues/2277)
* improve test-worker.js to assert promise results are correct ([73487b1](https://github.com/Agoric/agoric-sdk/commit/73487b12bbb656cd3809fc7f17c7b85f20f6e4ef)), closes [#1778](https://github.com/Agoric/agoric-sdk/issues/1778)
* increase testnet limit to allow more than 40 peers ([b72804f](https://github.com/Agoric/agoric-sdk/commit/b72804f4e0ab09af073e6aab3b5e3c6899549320))
* limit number of kernel steps per block ([a0f4588](https://github.com/Agoric/agoric-sdk/commit/a0f45880cc515c6a7f9333c670a3c1d9bdf35834))
* link all the errors ([6ea7588](https://github.com/Agoric/agoric-sdk/commit/6ea75880ce0ac56ebf1e2187593f42010f5aa929))
* missing console methods ([#2254](https://github.com/Agoric/agoric-sdk/issues/2254)) ([79e81b0](https://github.com/Agoric/agoric-sdk/commit/79e81b014ea6e3df1a98ef0d35e7cad2d1d966a6))
* multipoolAutoswap should throw seat.fail() when it can't comply ([#2337](https://github.com/Agoric/agoric-sdk/issues/2337)) ([0f02d52](https://github.com/Agoric/agoric-sdk/commit/0f02d52e5667d4cdaeb7c349ffa5826379335f4b)), closes [#2335](https://github.com/Agoric/agoric-sdk/issues/2335) [#2336](https://github.com/Agoric/agoric-sdk/issues/2336)
* multipoolAutoswap was calculating output prices incorrectly. ([#2166](https://github.com/Agoric/agoric-sdk/issues/2166)) ([60a4adf](https://github.com/Agoric/agoric-sdk/commit/60a4adf3976c5aeb407e479b136622b5b4793965))
* prefix Prometheus metrics with swingset_ ([73238dc](https://github.com/Agoric/agoric-sdk/commit/73238dc75e699bc7e888f1d8080ea20f1e2f483e))
* properly honour FIXME_MAX_CRANKS_PER_BLOCK ([60be251](https://github.com/Agoric/agoric-sdk/commit/60be25159f6786d5f911502aefdaa7ab7fd3cb6f))
* reenable Docker builds and deployment ([559ea06](https://github.com/Agoric/agoric-sdk/commit/559ea062251d73e3a6921c85f63631a50ddfad35))
* remove crankNumber from transcript entries ([#2429](https://github.com/Agoric/agoric-sdk/issues/2429)) ([d7886c0](https://github.com/Agoric/agoric-sdk/commit/d7886c08e81d64005ca9e9aeaea228ea49bc995f)), closes [#2400](https://github.com/Agoric/agoric-sdk/issues/2400) [#2428](https://github.com/Agoric/agoric-sdk/issues/2428)
* remove pointless excessive abstraction ([#2425](https://github.com/Agoric/agoric-sdk/issues/2425)) ([14285f5](https://github.com/Agoric/agoric-sdk/commit/14285f5d71dc37bbf8e90c4f26032805d39aeee6))
* remove unnecessary use of threads from Node-Golang bridge ([5ce3ce5](https://github.com/Agoric/agoric-sdk/commit/5ce3ce5d2de9eb32f7bd04d6d6ac5a968fd2ce74))
* removed another q ([8e20245](https://github.com/Agoric/agoric-sdk/commit/8e202455604a1a5ec1e500ea8b0de05a7ef87d51))
* review comments ([17d7df6](https://github.com/Agoric/agoric-sdk/commit/17d7df6ee06eb5c340500bb5582f985c2993ab19))
* review comments ([7db7e5c](https://github.com/Agoric/agoric-sdk/commit/7db7e5c4c569dfedff8d748dd58893218b0a2458))
* run ag-setup-cosmos under SES ([13c8efe](https://github.com/Agoric/agoric-sdk/commit/13c8efe6cf9ebc8c6a71b9098410c1af4162b570))
* take advantage of `/.../` being stripped from stack traces ([7acacc0](https://github.com/Agoric/agoric-sdk/commit/7acacc0d6ac06c37065ce984cc9147c945c572e5))
* update '@agoric/assert' types ([3ce7587](https://github.com/Agoric/agoric-sdk/commit/3ce7587d0ba6d7a0f5c51a0cacbdc414eb02891b))
* update dibc for v0.41.0 ([d990c14](https://github.com/Agoric/agoric-sdk/commit/d990c145ddcef3b090c63879a96a1942bc4ae69c))
* upgrade to patched cosmos-sdk v0.41.0 ([807320f](https://github.com/Agoric/agoric-sdk/commit/807320f5e16dafc8a1486eaf082bb54e994da577))
* use assert rather than FooError constructors ([f860c5b](https://github.com/Agoric/agoric-sdk/commit/f860c5bf5add165a08cb5bd543502857c3f57998))
* use Gaia's historical_entries value ([456dc5f](https://github.com/Agoric/agoric-sdk/commit/456dc5f5aa268d6e8c6ff750c5b9d4e4a7d543cc))
* **xs-worker:** restore xs vat manager test to working order ([9274082](https://github.com/Agoric/agoric-sdk/commit/92740823d8be398c458fc102b889a4d0baf66de0)), closes [TypeError#2](https://github.com/TypeError/issues/2)
* **xsnap:** Typo in README re order of REPL ops ([#2188](https://github.com/Agoric/agoric-sdk/issues/2188)) ([18b0cac](https://github.com/Agoric/agoric-sdk/commit/18b0cac663c1a822417b43b3fb2f2c8173fd10a1))
* yarn.lock changed. I do not know why ([#2255](https://github.com/Agoric/agoric-sdk/issues/2255)) ([f8c178a](https://github.com/Agoric/agoric-sdk/commit/f8c178a352ed4305b905345a5fd242e2d36563c5))
* **eventual-send:** test static method rejections ([f6bd055](https://github.com/Agoric/agoric-sdk/commit/f6bd055ccc897dc49ae92f452dcd5abf45bfae14))
* **kernel:** don't lose managerType ([37d169e](https://github.com/Agoric/agoric-sdk/commit/37d169ea3ae89d68c009065dedf886e6f786eb77))
* **swingset:** implement replayTranscript for all vat types ([7fde6a4](https://github.com/Agoric/agoric-sdk/commit/7fde6a46dbc392e61dc987f967303cf0884a230f))
* **swingset:** loadVat.js: properly wait for static vats to be ready ([ca4188b](https://github.com/Agoric/agoric-sdk/commit/ca4188b621f6fc175f682cc227cc3131dd1043f5)), closes [#2213](https://github.com/Agoric/agoric-sdk/issues/2213)
* **swingset:** test-worker.js: disable XS test until xsnap is ready ([61b2567](https://github.com/Agoric/agoric-sdk/commit/61b25674cb2493330f3e80eee3de870b8484d9cb))
* **xsnap:** Iron out resolution types ([1e2e10d](https://github.com/Agoric/agoric-sdk/commit/1e2e10d78b8e57df6e5eb9ea8f81ba4ded2de8b4))
* off-by-one: minimum positive result of getOutputPrice() is 1 ([#2198](https://github.com/Agoric/agoric-sdk/issues/2198)) ([82d68d9](https://github.com/Agoric/agoric-sdk/commit/82d68d91ad47453d85fdc9d023ed0e2faace184a))
* **tame-metering:** be tolerant to Node.js 14.15.x ([5b54e07](https://github.com/Agoric/agoric-sdk/commit/5b54e07c058230cbcc9f9505ce8ec60b61c099f1))
* **xsnap:** Make xsrepl executable ([#2197](https://github.com/Agoric/agoric-sdk/issues/2197)) ([bd7d738](https://github.com/Agoric/agoric-sdk/commit/bd7d738010e84db7bfbbf13bc7af1e3787243e7c))
* **xsnap:** This is not a smog check ([#2190](https://github.com/Agoric/agoric-sdk/issues/2190)) ([437814c](https://github.com/Agoric/agoric-sdk/commit/437814cf6dc78ecb7ee878e574f121b29a1e761f))
* **xsnap:** Thread spawn and os into xsnap ([619a4de](https://github.com/Agoric/agoric-sdk/commit/619a4dee82a1e63d6b6708dcbb102fa2aced676e))
* **xsnap:** Update submodules for build and use CURDIR ([#2186](https://github.com/Agoric/agoric-sdk/issues/2186)) ([d0bf5cb](https://github.com/Agoric/agoric-sdk/commit/d0bf5cb4394f0d542020863e72c3eeacd705c3d7))
* add placeholder for top-of-turn error logging ([#2163](https://github.com/Agoric/agoric-sdk/issues/2163)) ([f0c257c](https://github.com/Agoric/agoric-sdk/commit/f0c257ceb420f1d6fb4513ff9ef8c7c773b6e333))
* Correlate sent errors with received errors ([73b9cfd](https://github.com/Agoric/agoric-sdk/commit/73b9cfd33cf7842bdc105a79592028649cb1c92a))
* don't hang if our provides aren't needed ([ebfc6a8](https://github.com/Agoric/agoric-sdk/commit/ebfc6a8cafb0f0051ee504cc8caad4c9a3cc66a6))
* don't require node to compile golang ([f0709e0](https://github.com/Agoric/agoric-sdk/commit/f0709e07ef797d893d060750d5059a5ed7ba4434))
* ensure that the "os" keyring version.Name is alphanumeric ([964e117](https://github.com/Agoric/agoric-sdk/commit/964e1177b24bbc0ee8e7ad9fd0338ceabf7ef957))
* make HTTP replies more robust ([4b98e64](https://github.com/Agoric/agoric-sdk/commit/4b98e64412499bccd016b86eaa48abd21dc35b03))
* message batches reduce wallet setup from 80 to 20 chain trips ([7d17f2f](https://github.com/Agoric/agoric-sdk/commit/7d17f2f5f7585adb5ae02a26489ef2e9abe7c5bb))
* motivate some changes, drop an extraneous JSON-laundering ([6a1dfe0](https://github.com/Agoric/agoric-sdk/commit/6a1dfe08cb061216cd90cdec5a52cf84c451e95e))
* prevent device node leaks and stale urlHandlers ([a2825ac](https://github.com/Agoric/agoric-sdk/commit/a2825ace27d51fa1d6421a995cc38af346b2c03c))
* remove unnecessary Ansible step ([9bd7e61](https://github.com/Agoric/agoric-sdk/commit/9bd7e61ba48546c7ad76a20cf2db5e14d364b102))
* simple fixes for chain parameters ([a90ae2f](https://github.com/Agoric/agoric-sdk/commit/a90ae2fba72e2038be4987d390f9dfb9cb163897))
* speed up sim-chain when no configured inter-block delay ([8c7dd1e](https://github.com/Agoric/agoric-sdk/commit/8c7dd1eda1d864c89208256f27aaee3712f77d17))
* tolerate symbols as property names ([#2094](https://github.com/Agoric/agoric-sdk/issues/2094)) ([15022fe](https://github.com/Agoric/agoric-sdk/commit/15022fe7f3fd3d1fc67687f3b010968725c30a7e))
* updates for Ledger support ([68043b1](https://github.com/Agoric/agoric-sdk/commit/68043b1d42e9771d54196308b1960664437c3fc5))
* wire through the CapTP bootstrap message ([7af41bc](https://github.com/Agoric/agoric-sdk/commit/7af41bc13a778c4872863e2060874910d6c1fefa))
* **tame-metering:** log problems trying to meter roots ([5ed0310](https://github.com/Agoric/agoric-sdk/commit/5ed03102fd9b893578a1d6ecaa05c0fb010065e0))
* **tame-metering:** quieter warnings for defineProperty failures ([7575b94](https://github.com/Agoric/agoric-sdk/commit/7575b945d6f647bf3416ce18f843c45d073f8c3a))


### Features

* add a notifier to the timerService ([#2143](https://github.com/Agoric/agoric-sdk/issues/2143)) ([3cb4606](https://github.com/Agoric/agoric-sdk/commit/3cb46063080dd4fac27507ad0062e54dbf82eda4))
* add displayInfo as a parameter to makeZcfMint. ([#2189](https://github.com/Agoric/agoric-sdk/issues/2189)) ([f5cb3b9](https://github.com/Agoric/agoric-sdk/commit/f5cb3b9f6ce44b94e9b7af6ec1677c5c7aaf73a6))
* add GitHub action to run post-CI benchmark ([0dc6335](https://github.com/Agoric/agoric-sdk/commit/0dc63357fa166afa2b45a47f8ce284c7fc0d4ef4))
* add OTEL (OpenTelemetry) histograms ([f526ff4](https://github.com/Agoric/agoric-sdk/commit/f526ff4c787129d0fe99e1f82fd9f75bd27afb27))
* add support for post-CI automated benchmarking ([2bdd9db](https://github.com/Agoric/agoric-sdk/commit/2bdd9db4d3f553a58b0ca5245d9159fcb5432d80))
* allow $NO_FAKE_CURRENCIES=1 to eliminate default purses ([0a2d054](https://github.com/Agoric/agoric-sdk/commit/0a2d05496dd2de6e582f0df5729ffacd5ce80406))
* export SwingSet metrics to Prometheus via local HTTP port ([78160fe](https://github.com/Agoric/agoric-sdk/commit/78160fe0de20b8032bbdb988a882d8dcf10f9150))
* finish support for notifying multiple promises at once ([83c6c33](https://github.com/Agoric/agoric-sdk/commit/83c6c339f8ce31e8f8066e013a8f4bc5049cf6e2))
* make @agoric/eslint-plugin deal with assert.fail as throw ([f23adee](https://github.com/Agoric/agoric-sdk/commit/f23adee512aec50788d9c9efed1cea9d774dfe8f))
* modified eslint config to forbid the use of for...in loops ([#2423](https://github.com/Agoric/agoric-sdk/issues/2423)) ([1eb65d4](https://github.com/Agoric/agoric-sdk/commit/1eb65d4af52a40e229ec1eefaff0200d3ab6aba0))
* pluralize `resolve` syscall ([6276286](https://github.com/Agoric/agoric-sdk/commit/6276286b5553f13d3cb267c8015f83921a6caf9d))
* promise resolution notification refactoring ([4ffb911](https://github.com/Agoric/agoric-sdk/commit/4ffb91147dbdae971111d7f2fa1e5c9cdc1ae578))
* publish benchmarks stats to GitHub artifact ([cce6d36](https://github.com/Agoric/agoric-sdk/commit/cce6d36a9dd8411b2e1fce2598bfd8725d628438))
* refactor notification and subscription ([dd5f7f7](https://github.com/Agoric/agoric-sdk/commit/dd5f7f7fc5b6ae7f8bee4f123821d92a26581af4))
* retire C-list entries for resolved promises ([13f96aa](https://github.com/Agoric/agoric-sdk/commit/13f96aa2b15ec01509d6c594c61d9b3c15109997))
* upgrade to cosmos-sdk v0.40.1 ([b2813ac](https://github.com/Agoric/agoric-sdk/commit/b2813ac2287172c10e50e2c079a1a435105f5ca8))
* use xsnap worker CPU meter and start reporting consumption ([62e0d5a](https://github.com/Agoric/agoric-sdk/commit/62e0d5a3b5ff32bd79567bab8fa1b63eb7f9134a))
* vat-side promise ID retirement ([94e0078](https://github.com/Agoric/agoric-sdk/commit/94e0078673ff15e47c2fcf32f472d27c416a1cd8))
* wire metrics into fake-chain too ([003c34c](https://github.com/Agoric/agoric-sdk/commit/003c34caa9832c8171675dfbb466127ca14b360e))
* **swingset:** defaultManagerType option in makeSwingsetController ([#2266](https://github.com/Agoric/agoric-sdk/issues/2266)) ([b57f08f](https://github.com/Agoric/agoric-sdk/commit/b57f08f3514e052126a758f949acb5db3cc5a32d)), closes [#2260](https://github.com/Agoric/agoric-sdk/issues/2260)
* **swingset:** xsnap vat worker ([#2225](https://github.com/Agoric/agoric-sdk/issues/2225)) ([50c8548](https://github.com/Agoric/agoric-sdk/commit/50c8548e4d610e1e32537bc155e4c58d917cd6df)), closes [#2216](https://github.com/Agoric/agoric-sdk/issues/2216) [#2202](https://github.com/Agoric/agoric-sdk/issues/2202)
* **xs-vat-worker:** bootstrap SES shim on xsnap ([e775a99](https://github.com/Agoric/agoric-sdk/commit/e775a99afae43a8581cdeedd22545c7fa703c691))
* **xsnap:** Add interactive mode ([42912a7](https://github.com/Agoric/agoric-sdk/commit/42912a7c1d70cb67248f54f43b600165dbe7f624))
* **xsnap:** Add machinery for an xsrepl binary ([#2187](https://github.com/Agoric/agoric-sdk/issues/2187)) ([fc560d5](https://github.com/Agoric/agoric-sdk/commit/fc560d5ef9f77d85becd3c27edd820695900491f))
* **xsnap:** Add Node.js shell ([4491145](https://github.com/Agoric/agoric-sdk/commit/4491145cac1ab1d1a15b5b4b61a1c5a0cb975736))
* **xsnap:** Initial checkin from 34dfa4a ([f083df0](https://github.com/Agoric/agoric-sdk/commit/f083df0b791450eb28c2e43a69e3436f4b38d722))
* **xsnap:** Pivot terms from syscalls to commands ([3576b5c](https://github.com/Agoric/agoric-sdk/commit/3576b5cbd25c2dcbf0e94d5865c8b39e2cf2a1c7))
* slogulator annotation enhancements ([1c09876](https://github.com/Agoric/agoric-sdk/commit/1c09876f8998fabe8021ca24b8e60ae7b27825d2))





# [2.11.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.10.0...@agoric/sdk@2.11.0) (2020-12-10)


### Bug Fixes

* add interfaces and codec ([57db476](https://github.com/Agoric/agoric-sdk/commit/57db476926d53c4ae40dbd7f4ec2e1a71d4761a9))
* add more types and refactor naming of facets ([8f81091](https://github.com/Agoric/agoric-sdk/commit/8f810917e63aa8a2b78a523213310285abd49f8a))
* add-path is deprecated ([#2024](https://github.com/Agoric/agoric-sdk/issues/2024)) ([d3a40ef](https://github.com/Agoric/agoric-sdk/commit/d3a40ef93731117d927925c926af7515f113b528))
* allow the priceAuthority to supply a null quotePayment ([9b038eb](https://github.com/Agoric/agoric-sdk/commit/9b038ebcf00d60fa41873d04010d5c600e8f59a7))
* back off retrying to provision to prevent excessive load ([422b4da](https://github.com/Agoric/agoric-sdk/commit/422b4da4bd4caee0fe0aedb2e615e02180e28c37))
* build wallet URL with a trailing slash ([f76ad22](https://github.com/Agoric/agoric-sdk/commit/f76ad22a7fffda81425651731f47977ab0fcbd8c))
* clear up all the paths through `agoric start` ([1b89571](https://github.com/Agoric/agoric-sdk/commit/1b89571734e9c7fd4748b1cf7b6d5a985f045ef3))
* complete the migration to dweb.crt and dweb.key ([9f2383e](https://github.com/Agoric/agoric-sdk/commit/9f2383e7d761e5f91743b3ceaffaad9f253e51cc))
* Dependency checker yarn argument order ([#2051](https://github.com/Agoric/agoric-sdk/issues/2051)) ([c90fb61](https://github.com/Agoric/agoric-sdk/commit/c90fb610782d21d0111f9d2c7e03fd982786b8f7))
* don't reset x/capability state on new chains; it's sensitive ([6ba739e](https://github.com/Agoric/agoric-sdk/commit/6ba739e01abc01f32ef9449f78e3bb11ab29b7ff))
* don't stack up reopeners ([be3f146](https://github.com/Agoric/agoric-sdk/commit/be3f146852eb482b07c0e9e153db66637a57381c))
* localhost IBC client wishful thinking ([0653c03](https://github.com/Agoric/agoric-sdk/commit/0653c03faa51494e49de0458a3d586b04fcc09d2))
* make bigdipper.sh even more robust ([00b76a3](https://github.com/Agoric/agoric-sdk/commit/00b76a3c6d06d946219e4ac65ee8b9ad089ac55c))
* minor fixes while debugging purse notifiers ([bc4992a](https://github.com/Agoric/agoric-sdk/commit/bc4992ac65bba9007d44d242d6f0144072bf717b))
* minor tweaks for dapp-oracle ([b8169c1](https://github.com/Agoric/agoric-sdk/commit/b8169c1f39bc0c0d7c07099df2ac23ee7df05733))
* more support for hacktheorb ([b58e5cd](https://github.com/Agoric/agoric-sdk/commit/b58e5cd1c8b16467565967edbe4140a0749274d7))
* only run the kernel at the end of each block ([a11fd5b](https://github.com/Agoric/agoric-sdk/commit/a11fd5b5c98e197d04967a34568db1a782926c1b))
* patch -r esm to handle cached NPM downloads correctly ([fa79f5f](https://github.com/Agoric/agoric-sdk/commit/fa79f5f77d0e927ea6d0509ed1d52efd21cb687a))
* properly forward tokens to REPL ([647b999](https://github.com/Agoric/agoric-sdk/commit/647b9990a281cd086de0dc37ccb9ce04d81c3c34))
* properly generate a quote for every timer tick ([0c18aae](https://github.com/Agoric/agoric-sdk/commit/0c18aaee67d4e1c530d632c3b69edbcca6ce8fb7))
* replace "observable purse" with getCurrentAmountNotifier ([bdebc9e](https://github.com/Agoric/agoric-sdk/commit/bdebc9eedcb283ab6d12d40b1b3258cd1919d2fa))
* report when there is a spawn error from the Agoric cli ([9073526](https://github.com/Agoric/agoric-sdk/commit/9073526e45c0df34820edad2de52220e634f76fa))
* store the current state of the ListCard in localStorage ([ed6d7c1](https://github.com/Agoric/agoric-sdk/commit/ed6d7c1fbb71bca410e6688acbf4556cb8601b87))
* suppress auto-expand in setup page ([875af56](https://github.com/Agoric/agoric-sdk/commit/875af56419d8e6559eabff9518ca4b3614e36128))
* trim 300MB off of the Docker image size, and speed up builds ([01c4fc1](https://github.com/Agoric/agoric-sdk/commit/01c4fc13c764e30ebc2d8fa95b457569f524c09d))
* update Docker build steps ([7c7379d](https://github.com/Agoric/agoric-sdk/commit/7c7379db95f9b09151ad17533c9fa0c5c864c54c))
* update paths and make rules ([f9982a3](https://github.com/Agoric/agoric-sdk/commit/f9982a39deb4ba1b94b83dc0decf0ce8d9a575e9))
* update to IBC relayer v1.0.0-rc1 ([bea1021](https://github.com/Agoric/agoric-sdk/commit/bea10217f1647a31cb2771a620d749725163cbe7))
* upgrade to Cosmos-SDK v0.40.0-rc3 ([ad82894](https://github.com/Agoric/agoric-sdk/commit/ad82894016c851ba5b5f65509f06abea679dbd89))
* upgrade to stargate rc4 ([2a549e4](https://github.com/Agoric/agoric-sdk/commit/2a549e4fd28411bce61ddc16f131cbfcb7e3e8f7))
* **chain-params:** 5s blocks to account for global round-trip time ([6fac324](https://github.com/Agoric/agoric-sdk/commit/6fac324dc619ec452ffd33f40f24ef6496f732f3))
* upgrade the proto definitions ([30c7b70](https://github.com/Agoric/agoric-sdk/commit/30c7b70532f5a379d1b8ca45e11cbf80cfe3e1e5))
* use `.dockerignore` to omit swingset-runner and stat-logger ([84d12d4](https://github.com/Agoric/agoric-sdk/commit/84d12d49b9bc8e29090a8919aa8e8c2e44c2d942))
* use nodejs instead of sed for parsing package.json ([f58df9c](https://github.com/Agoric/agoric-sdk/commit/f58df9c1ca9e94747e7f1f9fd9509b4ee0858984))
* use the actual header height for the disconnect overlay ([e13a9d9](https://github.com/Agoric/agoric-sdk/commit/e13a9d9127a2d8d4220e2f9d159f18b154702649))
* **transform-metering:** suppress a size warning by not compacting ([af1648b](https://github.com/Agoric/agoric-sdk/commit/af1648b259feb50f2de9d111a1f83de0d559f47b))


### Features

* **ertp:** add purse.getCurrentAmountNotifier ([a060b5f](https://github.com/Agoric/agoric-sdk/commit/a060b5f5e760ea010aac68a300f9fadd12e1393b))
* 2 parties can buy callSpread positions separately ([#2019](https://github.com/Agoric/agoric-sdk/issues/2019)) ([2b19988](https://github.com/Agoric/agoric-sdk/commit/2b1998804f8534db933e38f902b7b69bf3bad3cc))
* **import-bundle:** Preliminary support Endo zip hex bundle format ([#1983](https://github.com/Agoric/agoric-sdk/issues/1983)) ([983681b](https://github.com/Agoric/agoric-sdk/commit/983681bfc4bf512b6bd90806ed9220cd4fefc13c))
* implement agoric --docker-tag=TAG ([afac575](https://github.com/Agoric/agoric-sdk/commit/afac575fbcfcce0e91b5f0b108eca46c77197f9a))
* implement makeQuoteNotifier(amountIn, brandOut) ([3035203](https://github.com/Agoric/agoric-sdk/commit/3035203c4d9a8972f999690976822965cc9fc6bd))
* make wallet elements start out expanded ([40bfda1](https://github.com/Agoric/agoric-sdk/commit/40bfda1e9ee716a6104c05feb6bff6e953a239ce))
* stash the accessToken in localStorage ([a8ce36c](https://github.com/Agoric/agoric-sdk/commit/a8ce36c7ef3ffe94b07629f2108206c6187dc675))
* The Slogulator Mk I ([42c5fdc](https://github.com/Agoric/agoric-sdk/commit/42c5fdcb78aa058a72db96adce19e8b8e1b7eba7))





# [2.10.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.10.0-dev.0...@agoric/sdk@2.10.0) (2020-11-07)


### Bug Fixes

* add liveslots-provided globals to vat Compartments ([3c79d51](https://github.com/Agoric/agoric-sdk/commit/3c79d516b7b3adfbe0f02ff809290acbc9079d44)), closes [#455](https://github.com/Agoric/agoric-sdk/issues/455) [#1846](https://github.com/Agoric/agoric-sdk/issues/1846) [#1867](https://github.com/Agoric/agoric-sdk/issues/1867)
* add more types and update APIs ([8b1c582](https://github.com/Agoric/agoric-sdk/commit/8b1c58297665f224018110317a3768587594121a))
* add stubs for GC tools (no-op on Node v12) ([7ecc184](https://github.com/Agoric/agoric-sdk/commit/7ecc1845c4f364660e66a42c5745d6d7225b76b6)), closes [#1872](https://github.com/Agoric/agoric-sdk/issues/1872) [#1925](https://github.com/Agoric/agoric-sdk/issues/1925)
* add vatDecRef to kernel, offer to liveslots ([#1926](https://github.com/Agoric/agoric-sdk/issues/1926)) ([527b44a](https://github.com/Agoric/agoric-sdk/commit/527b44a934937c71d18a0a702758132b5b77e1ed)), closes [#1872](https://github.com/Agoric/agoric-sdk/issues/1872)
* allow priceRegistry to force-override an entry ([dceafd6](https://github.com/Agoric/agoric-sdk/commit/dceafd6073b8ba6d43acbefafec68797eb365729))
* be resistent to rejected wake handlers ([cde3ce2](https://github.com/Agoric/agoric-sdk/commit/cde3ce2c93ea0288a8cfa3fbbd6fefb052127f50))
* be robust for local chain to start ([6cd7868](https://github.com/Agoric/agoric-sdk/commit/6cd78684ddaeb5064578a2fc5d305b7d1c57682c))
* coordinate assert typing with SES-shim ([#1972](https://github.com/Agoric/agoric-sdk/issues/1972)) ([ce56e24](https://github.com/Agoric/agoric-sdk/commit/ce56e24eb950f8bdede4e82207b339c3d2e4af58))
* correct oversights & editing errors in virtual object code ([581fb91](https://github.com/Agoric/agoric-sdk/commit/581fb915486238a785130a2d4c2141539b3b2e49))
* correct types for PromiseRecord.resolve ([84270a4](https://github.com/Agoric/agoric-sdk/commit/84270a4a10b17e285299126f9c7e7d2fb4a05aa1))
* count the outbound dataful trips to a given target ([e0b5040](https://github.com/Agoric/agoric-sdk/commit/e0b5040eaed659dc3debd4136a13947f5a26776b))
* don't create duplicate central price authority ([a7ec3d1](https://github.com/Agoric/agoric-sdk/commit/a7ec3d1f775c764fe09cf45fb67130f24d3a35cf))
* don't ever display a 404 for the wallet ([4fb3d48](https://github.com/Agoric/agoric-sdk/commit/4fb3d480530059f58fb4559744384d5f3c1c8adf))
* don't overwrite existing files with `link-cli` ([008b058](https://github.com/Agoric/agoric-sdk/commit/008b058ec7d4a68c08335111974434c993792d41))
* enable type checking of zoe/tools and fix errors ([98f4637](https://github.com/Agoric/agoric-sdk/commit/98f46379605817442c4c9921e6f0ecf16616976e))
* encapsulate natSafeMath.isGTE ([658c223](https://github.com/Agoric/agoric-sdk/commit/658c223963d2953efe9eba77e27eb3f51c224f4d))
* excise `conventionalDecimalPlaces` for now ([0e7c896](https://github.com/Agoric/agoric-sdk/commit/0e7c896ed0ea261aa76b07f3d9c5df640c42699e))
* export `@agoric/store/exported` ([4dee52b](https://github.com/Agoric/agoric-sdk/commit/4dee52ba250564781150df2c24ec22006968ca1a))
* further cleanup based on reviews ([2e74cc7](https://github.com/Agoric/agoric-sdk/commit/2e74cc72ce1c898b24c1a2613d7864d97fe383c2))
* get local-chain and local-solo working without SDK ([4dbe9e2](https://github.com/Agoric/agoric-sdk/commit/4dbe9e2ed450743db465b4e31a58ed51bc064079))
* have timer.tick return a promise that awaits the wake calls ([1707ea2](https://github.com/Agoric/agoric-sdk/commit/1707ea2ec73d441fa886ebdf4ef873d2a5849f6a))
* lexical balance simplifies issuer code ([#1889](https://github.com/Agoric/agoric-sdk/issues/1889)) ([224b39a](https://github.com/Agoric/agoric-sdk/commit/224b39add05ae3c10c1b1dc18b4ec71f9117e8ea))
* make wallet more robust, and handle decimals fully ([9c29e10](https://github.com/Agoric/agoric-sdk/commit/9c29e10225c3aef0717661674a7bdbdb2318231f))
* more tests and further refinements ([72f9624](https://github.com/Agoric/agoric-sdk/commit/72f9624b0809fe10d6023ac5591c01acb2e3bdfe))
* move makeQueryInvitation back to the publicFacet ([b73733b](https://github.com/Agoric/agoric-sdk/commit/b73733bee41a77f95c101b181198733a99ce0ddb))
* prepare for --import-from=node0 ([7300c3a](https://github.com/Agoric/agoric-sdk/commit/7300c3a4cde46963802f10ae8d0eb3d4134ecdeb))
* prevent infinite loop when metering BigInt values ([3b76f82](https://github.com/Agoric/agoric-sdk/commit/3b76f829d970b1998e35149ad0e21f0a8f54e2f0))
* properly display rejected offer manipulation ([420a524](https://github.com/Agoric/agoric-sdk/commit/420a524d92c21fd572db9f06637019170336e82c))
* properly implement block cadence ([b2d9446](https://github.com/Agoric/agoric-sdk/commit/b2d9446219c722a7b68e8e1835034aa7e4b8965c))
* properly return .pluginRoot when deploying plugins ([2ed6a96](https://github.com/Agoric/agoric-sdk/commit/2ed6a966d9b0a1e4183b675c7869fb7e24823639))
* put all parsing and stringification into the wallet ui ([58ff9a3](https://github.com/Agoric/agoric-sdk/commit/58ff9a32f10778e76e379d8a81cabf655c26c580))
* refactor liveSlots so it could provide vat globals ([165205f](https://github.com/Agoric/agoric-sdk/commit/165205f5480eed0374627b72e41248ee085b9771)), closes [#1867](https://github.com/Agoric/agoric-sdk/issues/1867)
* remove unreferenced variable ([d908153](https://github.com/Agoric/agoric-sdk/commit/d9081532d0a50f82e2ac0d2f25655b607d012c84))
* rework virtual objects implementation to use revised API design ([4c4c1c9](https://github.com/Agoric/agoric-sdk/commit/4c4c1c93f862b3aea990c7c7d556b7c6b949448d))
* somewhat tighter test for plain empty object ([#1981](https://github.com/Agoric/agoric-sdk/issues/1981)) ([eff15a4](https://github.com/Agoric/agoric-sdk/commit/eff15a4056d27623c1e9bce0f53dc4022bf78345))
* track initializations in progress with a WeakSet ([f06f0fe](https://github.com/Agoric/agoric-sdk/commit/f06f0fef34747c42f1c59b39907d2a8ee4642e25))
* tweak the deployment process ([6606a67](https://github.com/Agoric/agoric-sdk/commit/6606a679c6ce4c2cedee54e39d3777b4e59bff65))
* **captp:** don't crash hard on serialiasation failures ([8c98a9a](https://github.com/Agoric/agoric-sdk/commit/8c98a9a5f283dadd0007083255061773c94eda1d))
* remove unused 'state' arg from makeLiveslots() ([#1893](https://github.com/Agoric/agoric-sdk/issues/1893)) ([c2f7910](https://github.com/Agoric/agoric-sdk/commit/c2f79101e6e07b8afe3eadb906d5744b331d75e6))
* rename solo back to client ([3b77445](https://github.com/Agoric/agoric-sdk/commit/3b77445de8ac355a7f494beb96964fe2b9dbd8ab))
* stop suppressing contract evaluation errors ([#1887](https://github.com/Agoric/agoric-sdk/issues/1887)) ([96cd62f](https://github.com/Agoric/agoric-sdk/commit/96cd62f6acaa7444478c24cf8856f3da643480d3))
* use only embedded timer for `quoteAtTime` to gain performance ([8aa959a](https://github.com/Agoric/agoric-sdk/commit/8aa959a43d63cb45f01b1e3a18befd95ac41447f))
* various cleanups and simplifications in virtualObjectManager, enable cache size as config param ([d564817](https://github.com/Agoric/agoric-sdk/commit/d564817d69cdabd7e52b41d95a1bdf0f987d521a))
* WeakRef taming follows taming pattern ([#1931](https://github.com/Agoric/agoric-sdk/issues/1931)) ([3949dfb](https://github.com/Agoric/agoric-sdk/commit/3949dfbc6284e40f69f7ceff21ed9a414dcdcbd4))


### Features

* a call spread option contract and tests. ([#1854](https://github.com/Agoric/agoric-sdk/issues/1854)) ([db0962b](https://github.com/Agoric/agoric-sdk/commit/db0962b605bc28dfb186a369f0eff6c4420ff382)), closes [#1829](https://github.com/Agoric/agoric-sdk/issues/1829) [#1928](https://github.com/Agoric/agoric-sdk/issues/1928)
* add `agoric.priceAuthority` via priceAuthorityRegistry ([c602d14](https://github.com/Agoric/agoric-sdk/commit/c602d1446e7b6b37016fafd1e013da2c28cacc76))
* add a decimals parameter, and decimals method to brand ([241d0aa](https://github.com/Agoric/agoric-sdk/commit/241d0aa6fa20bd2618f362e6f1781f5c92a844b5))
* add ceilDivide to safeMath ([259c08f](https://github.com/Agoric/agoric-sdk/commit/259c08f6699cadf8456a4f09ebb0b8c22db49057))
* add Testnet.$USD and Testnet.$LINK ([eac7af9](https://github.com/Agoric/agoric-sdk/commit/eac7af9b3cb6662503e8fc20acd2932cdc8dfbc8))
* add types and flesh out manualTimer ([e01c1b0](https://github.com/Agoric/agoric-sdk/commit/e01c1b0026cac44c05d7339657fbc0e5fb0be2df))
* allow network-config.gci to specify a URL to genesis ([d15a26e](https://github.com/Agoric/agoric-sdk/commit/d15a26e759899f286d2ee0045ab93926d7fc337f))
* convert the fakePriceAuthority to a PlayerPiano model ([#1985](https://github.com/Agoric/agoric-sdk/issues/1985)) ([cd7ebd8](https://github.com/Agoric/agoric-sdk/commit/cd7ebd86b1f37655b9213786ab6828dd6c7c098a))
* export extended @agoric/zoe/tools/manualTimer ([dbfa393](https://github.com/Agoric/agoric-sdk/commit/dbfa39369d5ec14a1701571062296de63830afe7))
* implement `$AGORIC_CLI_OPTS` override ([e60e6f1](https://github.com/Agoric/agoric-sdk/commit/e60e6f16735f969fed029f417dd5e305e0310997))
* implement virtual objects kept in vat secondary storage ([9f4ae1a](https://github.com/Agoric/agoric-sdk/commit/9f4ae1a4ecda4245291f846149bab6c95c96634c))
* move oracle and priceAggregator contracts from dapp-oracle ([035603b](https://github.com/Agoric/agoric-sdk/commit/035603bb9caa143432a77ae99b845cd80b421948))
* record displayInfo in the issuerTable ([72a2137](https://github.com/Agoric/agoric-sdk/commit/72a2137e545c1bd3f47842c1b85c6d31e2b3b6a9))
* simple volatile priceAuthority ([af76585](https://github.com/Agoric/agoric-sdk/commit/af7658576f00b6ebaae3bd91aebc6d9fc983fa71))
* update wallet for decimals ([898ce50](https://github.com/Agoric/agoric-sdk/commit/898ce50978bfeae94b5d342d94a0188b9a060a47))
* **ertp:** add displayInfo.significantDecimals ([c740a05](https://github.com/Agoric/agoric-sdk/commit/c740a0523b1c829ec5d89df5846055cbfd38d4c7))
* update bigdipper scripts and services ([2be854d](https://github.com/Agoric/agoric-sdk/commit/2be854debb1c45ab702fd5cfabccbfe479e7eff6))
* **assert:** Thread stack traces to console, add entangled assert ([#1884](https://github.com/Agoric/agoric-sdk/issues/1884)) ([5d4f35f](https://github.com/Agoric/agoric-sdk/commit/5d4f35f901f2ca40a2a4d66dab980a5fe8e575f4))
* **zoe:** add priceAuthorityRegistry ([02c6147](https://github.com/Agoric/agoric-sdk/commit/02c614731477ec62c6dca18165619c8dd37ecaea))





# [2.10.0-dev.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.9.0...@agoric/sdk@2.10.0-dev.0) (2020-10-19)


### Bug Fixes

* **ag-solo:** remove stale call to ackWallet ([148957a](https://github.com/Agoric/agoric-sdk/commit/148957a722d4c935025eab8a5e3481ab42d43736))
* **agoric-cli:** correct missing installation of ui subdirectory ([4b073c2](https://github.com/Agoric/agoric-sdk/commit/4b073c2aa1b9d0a7a43028978775bd2273b359c8))
* push the @agoric/sdk tag separately to trigger Docker builds ([22bd723](https://github.com/Agoric/agoric-sdk/commit/22bd7237140d055e69ebb291b9480434fddbc2b3))


### Features

* **zoe:** export src/contractFacet/fakeVatAdmin for dapps ([ea8568f](https://github.com/Agoric/agoric-sdk/commit/ea8568f7d2b67b10507d911c6585b1728ad3d011))
* split exchange benchmark rounds in two ([94fdfdc](https://github.com/Agoric/agoric-sdk/commit/94fdfdcc7a06b1645e184d9533f8b87c5a80761f))
* **E:** . ([eddf51e](https://github.com/Agoric/agoric-sdk/commit/eddf51eb3c3c59e4cf9031ee0c21231c6585b7c2))
* **E:** . ([4ce1239](https://github.com/Agoric/agoric-sdk/commit/4ce12393a36c6d68046442e0cf6b517c9c97f03c))
* **E:** . ([672c593](https://github.com/Agoric/agoric-sdk/commit/672c59351cf04a174f2cfd553f026929613cffaf))
* **E:** . adding tests for the sendOnly variant. ([19182b3](https://github.com/Agoric/agoric-sdk/commit/19182b35088928e1feb5ef559efb66edec587a9a))
* **E:** . continuing ([6c51052](https://github.com/Agoric/agoric-sdk/commit/6c51052c7497e932d0b72d97b3fe0747b53b14cc))
* **E:** . continuing onward ([2b1eb5b](https://github.com/Agoric/agoric-sdk/commit/2b1eb5b9715cb3bf8c7bf1e4617dc6b3fab2ecd3))
* **E:** . fixing E.js ([4d57814](https://github.com/Agoric/agoric-sdk/commit/4d57814035576fccdd1f41fd13d50e3ebf719123))
* **E:** . fixing test-e.js ([a48bb95](https://github.com/Agoric/agoric-sdk/commit/a48bb956f6e6d63c483c03a43aa561cf72eb3424))
* **E:** . test skipped for now until I am destumped ([fd9df0f](https://github.com/Agoric/agoric-sdk/commit/fd9df0f3d78863e271107a687765c56d77edd62d))
* add vatstorage syscalls to kernel ([90ef974](https://github.com/Agoric/agoric-sdk/commit/90ef974eed85bcb97126c45652e785ac243b9894))
* **E:** . ([c0d8013](https://github.com/Agoric/agoric-sdk/commit/c0d80138bb66c047466b040c7c44ebe4626dd939))
* **E:** . another test added. ([162c0d7](https://github.com/Agoric/agoric-sdk/commit/162c0d7f26f113d8ed6608c229add9592265ff66))
* **E:** . throwsAsync not asyncThrows ([aa62713](https://github.com/Agoric/agoric-sdk/commit/aa62713d8947c46868c4b511bd29f330d3a7a13b))
* **E:** . voiding voids ([3908652](https://github.com/Agoric/agoric-sdk/commit/390865279be9cf30f64bb27500d50f5107ef1c89))
* **E:** . was missing a closing paren. ([b87d485](https://github.com/Agoric/agoric-sdk/commit/b87d485e241f2bca9b147a8006c0e80a96c5036e))
* **E:** starting to add missing E.sendOnly() ([e04ee59](https://github.com/Agoric/agoric-sdk/commit/e04ee592b761dc433adc3a7ccb08df0ac3895616))





# [2.9.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.8.1-dev.3...@agoric/sdk@2.9.0) (2020-10-11)


### Bug Fixes

* add getBootstrap method to handler object ([bb1f525](https://github.com/Agoric/agoric-sdk/commit/bb1f5256bd6ab49c83cb46aee9e3a6557293f5b6))
* add netstring encode/decode/stream library ([fd1da9e](https://github.com/Agoric/agoric-sdk/commit/fd1da9e94ff64f941c5f667e124f55ef27d03fb6)), closes [#1797](https://github.com/Agoric/agoric-sdk/issues/1797) [#1807](https://github.com/Agoric/agoric-sdk/issues/1807)
* allow for genesis.initial_height > 1 ([c37fe33](https://github.com/Agoric/agoric-sdk/commit/c37fe33865a5c6e83b7ea3ca3d7e12cb84b8d50e))
* be more explicit when provision-one doesn't return JSON ([0f0df62](https://github.com/Agoric/agoric-sdk/commit/0f0df6282a1ae6586f0d19b6be89ce8e05c14e19))
* change encoders/decoders for kernel-worker protocol endpoints ([8eb13fa](https://github.com/Agoric/agoric-sdk/commit/8eb13fa4940dbd4574e15bbcd14adcc812520b27))
* clean up some debug log messages for consistency ([56a0763](https://github.com/Agoric/agoric-sdk/commit/56a076320593f23fcb65cd118f0481ef40898a6a))
* clean up worker subprocess spawning ([afeced8](https://github.com/Agoric/agoric-sdk/commit/afeced85a7f3523aed3655c3d498ecdc9314ef02)), closes [#1777](https://github.com/Agoric/agoric-sdk/issues/1777)
* disable state-sync by default, until we've implemented it ([fedb533](https://github.com/Agoric/agoric-sdk/commit/fedb533ee3e6a989131b1c1a8992072b562d4fa9))
* enable external `agoric open` when running under Docker ([57446a5](https://github.com/Agoric/agoric-sdk/commit/57446a5ae3187cd32984c797bf3e69dd2ef88d3d))
* get deployment to work ([77d2c6b](https://github.com/Agoric/agoric-sdk/commit/77d2c6b47bc18a503b46949e59fc0fe6d5a14225))
* handle syscallResult and deliveryResult consistently among workers ([9e6e31a](https://github.com/Agoric/agoric-sdk/commit/9e6e31ac55521893b6fdf31785bb901345ed46af)), closes [#1775](https://github.com/Agoric/agoric-sdk/issues/1775)
* have liveSlots reject Promise arguments in D() invocations ([#1803](https://github.com/Agoric/agoric-sdk/issues/1803)) ([cdcf99d](https://github.com/Agoric/agoric-sdk/commit/cdcf99dd3e510a4f79bf55a823b62c2070038685)), closes [#1358](https://github.com/Agoric/agoric-sdk/issues/1358)
* improve API to punt serialization to the backing store ([fbfc0e7](https://github.com/Agoric/agoric-sdk/commit/fbfc0e75e910bc2fd36f0d60eac3929735d3fe68))
* loadVat should accept managerType= in options ([e9838f1](https://github.com/Agoric/agoric-sdk/commit/e9838f13853baa2f1c63d78dde0ca04bba688196))
* make ag-cosmos-helper's home $HOME/.ag-cosmos-helper again ([1b9ad64](https://github.com/Agoric/agoric-sdk/commit/1b9ad647916d2c8de11b5f884bb88613e95ddcaa))
* minor fixes for bootstrap and web server ([0829061](https://github.com/Agoric/agoric-sdk/commit/08290617dccb94b565657717cdc022ce462aa237))
* new 'worker-protocol' module to do Array-to-Buffer conversion ([e23b7bb](https://github.com/Agoric/agoric-sdk/commit/e23b7bb40e20bacf7f64c627333918e7d5137560))
* pass testLog to all vatWorkers ([29bc81a](https://github.com/Agoric/agoric-sdk/commit/29bc81a46d057532f51c37bed081d850cf7f31db)), closes [#1776](https://github.com/Agoric/agoric-sdk/issues/1776)
* properly update inbox petnames ([00477b5](https://github.com/Agoric/agoric-sdk/commit/00477b58a0995d1cc1ad11f33312abaf7749fb20))
* remove obsolete `--home-client` ([f97171a](https://github.com/Agoric/agoric-sdk/commit/f97171a001842e2777cf4e437d1ec8cf086ca1b9))
* rename netstring exports, clean up object modes ([e2bbaa2](https://github.com/Agoric/agoric-sdk/commit/e2bbaa25c53fd37bc26cd2d5d9f01710b0e06243))
* stop using netstring-stream ([6ac996c](https://github.com/Agoric/agoric-sdk/commit/6ac996c00b876bac89ba99677bc5b66502506f4b))
* update @agoric/store types and imports ([9e3493a](https://github.com/Agoric/agoric-sdk/commit/9e3493ad4d8c0a6a9230ad6a4c22a3254a867115))
* upgrade to latest cosmos-sdk ([876d2c8](https://github.com/Agoric/agoric-sdk/commit/876d2c8318521972a4f600f1307b1b47b6b338f7))
* use the correct --home for sending provision-one ([98f03d6](https://github.com/Agoric/agoric-sdk/commit/98f03d659fb252c4164bde0d3c84eac7dbbe1669))
* **ERTP:** use makeExternalStore for ledgers ([20667ce](https://github.com/Agoric/agoric-sdk/commit/20667ce71ae07ddb6ff5d8c52a255e95b65ae70c))
* **wallet:** propagate offer handler exceptions to the WebSocket ([3965361](https://github.com/Agoric/agoric-sdk/commit/39653616bb45546593ba49cc59a8e6a0d1b515f2))
* improved error message when eventual send target is undefined ([#1847](https://github.com/Agoric/agoric-sdk/issues/1847)) ([f33d30e](https://github.com/Agoric/agoric-sdk/commit/f33d30e46eeb209f039e81a92350c06611cc45a1))
* tweaks from review comments ([bccad6b](https://github.com/Agoric/agoric-sdk/commit/bccad6b6ae7997dd60425cbba30c993eb1378666))
* update swingset runner demos for latest zoe incarnation ([c169ffd](https://github.com/Agoric/agoric-sdk/commit/c169ffd3568d8f4042b10b92da1b8f96fda19a7d))
* upgrade to our --keyring-dir PR (temporarily) ([38e170d](https://github.com/Agoric/agoric-sdk/commit/38e170d42c2af74a565749d040f365905cd0d3fc))
* use `gentx --client-home=...` to initialise genesis validators ([54c5a2f](https://github.com/Agoric/agoric-sdk/commit/54c5a2f2e23f7f9df254b35f2657e449d9fb847a))
* use gentx --home-client flag ([5595b41](https://github.com/Agoric/agoric-sdk/commit/5595b410377116b7a2d20d39a46ec87d2b5ea01f))
* use gentx --home-server instead of --home-client ([ed634bf](https://github.com/Agoric/agoric-sdk/commit/ed634bfbe976ca48a203b4f44b3eb0d62e1edd82))
* **cosmic-swingset:** make REPL history numbers more robust ([ed7729a](https://github.com/Agoric/agoric-sdk/commit/ed7729a41226af3ceb99474dcde3015487218927))
* **eventual-send:** silence unhandled rejection for remote calls ([fb7c247](https://github.com/Agoric/agoric-sdk/commit/fb7c247688eacf09e975ca87ab7ef246cd240136))
* **swingset:** add 'slogFile' option to write slog to a file ([f97ef41](https://github.com/Agoric/agoric-sdk/commit/f97ef4152dc2074b82823a9ff8595e4b9a04395c))
* xs-vat-worker: add makeMarshal to vatPowers ([1edd620](https://github.com/Agoric/agoric-sdk/commit/1edd62015e955d99fef8f75d32d2a5f1032aca38)), closes [#1776](https://github.com/Agoric/agoric-sdk/issues/1776)


### Features

* expose API server (0.0.0.0:1317) for deployed chain ([d910692](https://github.com/Agoric/agoric-sdk/commit/d9106926fec9250ac48dfe918e73258c0cf2af60))
* **store:** implement external store machinery ([df4f550](https://github.com/Agoric/agoric-sdk/commit/df4f550270894c75fe25f252ee5db66d4c77e8db))
* accept 'description' in vat creation options, pass to slog ([cb2d73b](https://github.com/Agoric/agoric-sdk/commit/cb2d73b7b1b5e63d4de611d3fec6dc381e38e3fc))
* **swingset-runner:** accept '--slog FILE' to write slogfile ([d710582](https://github.com/Agoric/agoric-sdk/commit/d71058289c97b5fee606dc0690f1289b497a5b4f))
* allow CapTP URL handlers ([b3e1e61](https://github.com/Agoric/agoric-sdk/commit/b3e1e61b2a2dee7bd203bcffa23b2d1d5d1409bd))
* allow deploy scripts to see the deployment host and port ([7ab7108](https://github.com/Agoric/agoric-sdk/commit/7ab71084c683b06a3c5d840ec618599d4366a905))
* cleanups and fixes to the wallet ([db525f8](https://github.com/Agoric/agoric-sdk/commit/db525f85a72c578bffcd055c151743fa8176dcd2))
* implement slip44 HD path coin type ([ed9743a](https://github.com/Agoric/agoric-sdk/commit/ed9743a84ba16dd669a9235ba0ba9d2db76e4e35))
* overhaul kernel initialization and startup ([23c3f9d](https://github.com/Agoric/agoric-sdk/commit/23c3f9df56940230e21a16b4861f40197192fdea))
* pass through URL search params via wallet-bridge.html ([643636e](https://github.com/Agoric/agoric-sdk/commit/643636e3a0de564b4574a134368963a569252a96))
* revamp vat termination API ([aa5b93c](https://github.com/Agoric/agoric-sdk/commit/aa5b93c7ea761bf805206c71bb16e586267db74d))
* **agoric-cli:** add --no-browser option to open ([fb8607d](https://github.com/Agoric/agoric-sdk/commit/fb8607d7325de5742833af5e24aaf050bf65d67e))





## [2.8.1-dev.3](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.8.1-dev.2...@agoric/sdk@2.8.1-dev.3) (2020-09-18)


### Bug Fixes

* **cosmic-swingset:** remove monorepo Go dependency ([052518e](https://github.com/Agoric/agoric-sdk/commit/052518eef787f28bcf29c025bb1e25dd9c411fee))





## [2.8.1-dev.2](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.8.1-dev.0...@agoric/sdk@2.8.1-dev.2) (2020-09-18)

**Note:** Version bump only for package @agoric/sdk





## [2.8.1-dev.1](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.8.1-dev.0...@agoric/sdk@2.8.1-dev.1) (2020-09-18)

**Note:** Version bump only for package @agoric/sdk





## [2.8.1-dev.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.8.0...@agoric/sdk@2.8.1-dev.0) (2020-09-18)


### Bug Fixes

* add check so that expected values must be null in assertProposalShape ([#1788](https://github.com/Agoric/agoric-sdk/issues/1788)) ([0de4bcd](https://github.com/Agoric/agoric-sdk/commit/0de4bcdeae1858041a20ab082b6ef1c4ada39ce2))
* assert keyword in getPayout ([#1790](https://github.com/Agoric/agoric-sdk/issues/1790)) ([e4ec018](https://github.com/Agoric/agoric-sdk/commit/e4ec018683ccf64195334c2146a2b72eb0f1f8c9))
* improve error messages for mintGains and burnLosses ([#1796](https://github.com/Agoric/agoric-sdk/issues/1796)) ([916f7ae](https://github.com/Agoric/agoric-sdk/commit/916f7ae26cefbf65e667fe499b270256c49c4676))
* restore deleted comments ([9ed1f7d](https://github.com/Agoric/agoric-sdk/commit/9ed1f7d23aca6287194454f500e6238ad6f1c504))
* saveAllIssuers doc says it ignores the brand for known keywords ([88675f5](https://github.com/Agoric/agoric-sdk/commit/88675f542526671edefbbd8677981fcf02bbc8a5))
* standardize whether keywords are quoted ([1fa44d9](https://github.com/Agoric/agoric-sdk/commit/1fa44d9ff7c7f8b317df442ba7a5893a95e49f7b))





# [2.8.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.7.2...@agoric/sdk@2.8.0) (2020-09-16)


### Bug Fixes

* add a default offerHandler ([#1759](https://github.com/Agoric/agoric-sdk/issues/1759)) ([d25052d](https://github.com/Agoric/agoric-sdk/commit/d25052d10aa6e863dd68e24e0a54c46be0e0352d))
* Add a seat in mintGains() if none is provided ([0efa57f](https://github.com/Agoric/agoric-sdk/commit/0efa57f86eff3f89567c8096f185c17549ad1ac0)), closes [#1696](https://github.com/Agoric/agoric-sdk/issues/1696)
* add TODO unimplemented for liveSlots synthetic presences ([6089e71](https://github.com/Agoric/agoric-sdk/commit/6089e71aaa48867625c19d2f64c6e5b29880b7ad))
* allow local Presences to receive deliveries as well ([93c8933](https://github.com/Agoric/agoric-sdk/commit/93c8933b5c2bdafec26b325e0d3fc6e88978d199)), closes [#1719](https://github.com/Agoric/agoric-sdk/issues/1719)
* avoid database reentrancy issue during parallel testing ([82bb33e](https://github.com/Agoric/agoric-sdk/commit/82bb33e215e805f055911a509a6a804a6d2e0ea8))
* change 'Trade Successful' offerResult to 'Order Added' ([#1651](https://github.com/Agoric/agoric-sdk/issues/1651)) ([7da7f58](https://github.com/Agoric/agoric-sdk/commit/7da7f5809166315b9283fd3954b545789050d92e))
* change webkey -> accessToken and polish usage ([0362abe](https://github.com/Agoric/agoric-sdk/commit/0362abe1f6aa1322d50826e77c052881d940f72e))
* create dweb/data if it doesn't exist ([f6fcb2e](https://github.com/Agoric/agoric-sdk/commit/f6fcb2e89a205b9861ade6b0295d9c1376fc8c00))
* Deadline type parameter ([4171e05](https://github.com/Agoric/agoric-sdk/commit/4171e054351657c7156341eec067c49a037559e3))
* declare amountMathKind parameter to makeissuerkit optional ([a21832a](https://github.com/Agoric/agoric-sdk/commit/a21832a9a2b88aa43d2b532a5b92f99c47d3e11b)), closes [#1373](https://github.com/Agoric/agoric-sdk/issues/1373)
* don't make two round trips in order to perform checks in addPool ([a6efdab](https://github.com/Agoric/agoric-sdk/commit/a6efdabdbdff8bb772dc370e4bd6e48b26b91c06))
* don't rely on validator DNS names when finding the network ([56e0cb3](https://github.com/Agoric/agoric-sdk/commit/56e0cb363af5d6130e74ee6b1b5335c200f4042e))
* drastically simplify the new-block listener ([2b3160f](https://github.com/Agoric/agoric-sdk/commit/2b3160fb9efe35e63749ef6cc8d616c37beb01b3))
* eliminate unnecessary try/catch ([f3dc45c](https://github.com/Agoric/agoric-sdk/commit/f3dc45c63f0278e10ff1ee2eb08f3f7045b46d52))
* excise half-fast Vagrant support ([9bbab1c](https://github.com/Agoric/agoric-sdk/commit/9bbab1c204a0c44bad2e51bcd0f7d08ad02b5a5b))
* exit zcfSeats immediately on shutdown. ([#1770](https://github.com/Agoric/agoric-sdk/issues/1770)) ([2409eb5](https://github.com/Agoric/agoric-sdk/commit/2409eb58f0784d7ca9f7110cf37a6a8706ee541b))
* fix bug [#1491](https://github.com/Agoric/agoric-sdk/issues/1491), bogus hostStorage setup in test ([eb30411](https://github.com/Agoric/agoric-sdk/commit/eb304119f169f2c983ddcccc07376c32f1d05b91))
* fix bug [#1544](https://github.com/Agoric/agoric-sdk/issues/1544), type check store parameters instead of coercing ([6d9b4b8](https://github.com/Agoric/agoric-sdk/commit/6d9b4b80111318ecc36949d47f06514a5f4aec95))
* fix bug [#1609](https://github.com/Agoric/agoric-sdk/issues/1609), confusing error message on malformed vat code ([0c7e162](https://github.com/Agoric/agoric-sdk/commit/0c7e162eeca969d21fb8067e6b4690ae567e72e2))
* have accessToken use a database in ~/.agoric, not network ([bc9cf83](https://github.com/Agoric/agoric-sdk/commit/bc9cf83273b01b76006d69e4ea47b9efbee358dd))
* implement epochs and make tolerant of restarts ([1c786b8](https://github.com/Agoric/agoric-sdk/commit/1c786b861a445891d09df2f1a47d689d641a0c5f))
* implement robust plugin persistence model ([2de552e](https://github.com/Agoric/agoric-sdk/commit/2de552ed4a4b25e5fcc641ff5e80afd5af1d167d))
* kickOut does not throw itself ([#1663](https://github.com/Agoric/agoric-sdk/issues/1663)) ([9985dc4](https://github.com/Agoric/agoric-sdk/commit/9985dc4ef6d1f1e75bb722c8abd19eefc1479e36))
* let the other side know about a disconnect if we initiate it ([510f427](https://github.com/Agoric/agoric-sdk/commit/510f4275b43dc92bb719cde97a3078163da46211))
* lint was unhappy with the types on an array of mixed promises ([276e5fe](https://github.com/Agoric/agoric-sdk/commit/276e5fe01ca39a8d2d3dfefe0285bd7f1dd6da96))
* make brand optional in the types of `getAmountAllocated` ([#1760](https://github.com/Agoric/agoric-sdk/issues/1760)) ([3a98491](https://github.com/Agoric/agoric-sdk/commit/3a98491b3aebe20832cb982ebd6fc18b6c77058f))
* make generateAccessToken URL-safe by default ([722f811](https://github.com/Agoric/agoric-sdk/commit/722f811001a16d62e69af76de8a889e6eac4a48f))
* make setState asynchronous ([73f9d40](https://github.com/Agoric/agoric-sdk/commit/73f9d40eb9e3f1b8a08355d0ba9d8835421093dd))
* minor updates from PR review ([aa37b4f](https://github.com/Agoric/agoric-sdk/commit/aa37b4f4439faa846ced5653c7963798f44e872e))
* need to expose the wallet bridge to the dapp ([e520b8f](https://github.com/Agoric/agoric-sdk/commit/e520b8fc2afa6f24447140fa54581f4c25cf08cb))
* pass through the entire marshal stack to the vat ([f93c26b](https://github.com/Agoric/agoric-sdk/commit/f93c26b602766c9d8e3eb15740236cf81b38387f))
* properly detect incorrect transactions ([9f8866b](https://github.com/Agoric/agoric-sdk/commit/9f8866b34f2c2ff214f006953371a447860938dd))
* properly load and restore plugin device state ([6461fb8](https://github.com/Agoric/agoric-sdk/commit/6461fb84921fcb9f1b71b7e102229c336b04558e))
* reject promises in the arguments to syscall.callNow() ([7472661](https://github.com/Agoric/agoric-sdk/commit/747266162bc84378ebf5fc2290b4dbb45cd585fc)), closes [#1346](https://github.com/Agoric/agoric-sdk/issues/1346) [#1358](https://github.com/Agoric/agoric-sdk/issues/1358) [#1358](https://github.com/Agoric/agoric-sdk/issues/1358)
* remove ability for localhost to auto-popup the wallet ([597cb80](https://github.com/Agoric/agoric-sdk/commit/597cb8071f335a3aa5a0bcc17d7ff88c1ccc4e07))
* remove ancient 'resolver' vatSlot type ([4adcd58](https://github.com/Agoric/agoric-sdk/commit/4adcd5877b8cbb1e852e6ef57f4b863b2096ac14))
* repair and add types for multipoolAutoSwap.getLiquidityIssuer() ([7c7bcca](https://github.com/Agoric/agoric-sdk/commit/7c7bcca9b05f098b878ae7cd79c047da3c6ade8c))
* restoring most state, just need to isolate the plugin captp ([f92ee73](https://github.com/Agoric/agoric-sdk/commit/f92ee731afa69435b10b94cf4a483f25bed7a668))
* restrict plugins to be loaded only from ./plugins ([2ba608e](https://github.com/Agoric/agoric-sdk/commit/2ba608e46c6d8d33bdfca03a32af09f9cde3cc34))
* revamp multipoolAutoswap: liquidity bug, in vs. out prices ([92bfdd5](https://github.com/Agoric/agoric-sdk/commit/92bfdd5ec6b4e17500999cec825c22e7abd1758f))
* robust .innerHTML protection as per OWASP ([0e54b30](https://github.com/Agoric/agoric-sdk/commit/0e54b30f44bedf55c809fafb17a0cbf05c598636))
* SECURITY: ensure that HTML tags in the REPL are defanged ([b9bd5eb](https://github.com/Agoric/agoric-sdk/commit/b9bd5ebc1a8071326fc206062e089212236430fc))
* SECURITY: use a private on-disk webkey for trusted auth ([f769d95](https://github.com/Agoric/agoric-sdk/commit/f769d95031f8e0b2003d31f0554dce17d6440f1b))
* silence normal disconnects ([01d94af](https://github.com/Agoric/agoric-sdk/commit/01d94af7d9f4dd98b0859b3707bedb57d6a9af3f))
* simplify helper APIs ([#1732](https://github.com/Agoric/agoric-sdk/issues/1732)) ([068f4b1](https://github.com/Agoric/agoric-sdk/commit/068f4b141c21d2fdf9958e69f35a614fa0899da5))
* stop accepting offers if zcf.shutdown is called ([#1772](https://github.com/Agoric/agoric-sdk/issues/1772)) ([6ba171f](https://github.com/Agoric/agoric-sdk/commit/6ba171fb2aec659683c911b5aa4f97dfa8e2f20a))
* unique() was LGPL; remove it in favour of a freer alternative ([b2a5319](https://github.com/Agoric/agoric-sdk/commit/b2a53199f238d7f9049bfb31dbb4f9b2f1d433fe))
* upgrade to polycrc that supports safe integers ([b7674c6](https://github.com/Agoric/agoric-sdk/commit/b7674c64a4bdd321bb6fa96f9485161fc3315309))
* userSeat.hasExited was returning the opposite of its intent ([cdfc5e6](https://github.com/Agoric/agoric-sdk/commit/cdfc5e6aff4eba8a6ec02de3486637b75a67164c)), closes [#1729](https://github.com/Agoric/agoric-sdk/issues/1729)


### Features

* add `depositToSeat`, `withdrawFromSeat` ([#1680](https://github.com/Agoric/agoric-sdk/issues/1680)) ([fdbdded](https://github.com/Agoric/agoric-sdk/commit/fdbddedb3aa41b8538533368d3bdd1fe2fa3faff))
* add a simple CRC-6 to board ids to prevent dangerous typos ([85ea976](https://github.com/Agoric/agoric-sdk/commit/85ea9760d652727ef6780efa7529e7f6f7f20b76))
* add local.plugin~.getPluginDir() ([94e7016](https://github.com/Agoric/agoric-sdk/commit/94e70164c1be5f68aaadfcf75223c441cde9f876))
* add swingset-runner bulk demo running tool ([401dcb2](https://github.com/Agoric/agoric-sdk/commit/401dcb228b426b9457e3e77b50fc32c3a330ea61))
* agoric deploy --allow-unsafe-plugins ([d2a545e](https://github.com/Agoric/agoric-sdk/commit/d2a545ed73b4403f9d85d5ff89637e2470ecdb29))
* allow Offer to accept a PaymentPKeywordRecord ([f5f9c41](https://github.com/Agoric/agoric-sdk/commit/f5f9c41b9eec519825c3b1940e3cc743f14056c5))
* be resilient to losing a connection to the chain ([db4274f](https://github.com/Agoric/agoric-sdk/commit/db4274fc8d2670d9191d4373e97bae3380ddc327))
* bidirectional loopback with `makeNear` ([4e29d20](https://github.com/Agoric/agoric-sdk/commit/4e29d206f6e881f82715c8a569ce291dd7ae82a8))
* further minor perf instrumentation tweaks ([8e93cd0](https://github.com/Agoric/agoric-sdk/commit/8e93cd01c7d2ffafb3a9282a453d8bed222b0e49))
* implement CapTP forwarding over a plugin device ([b4a1be8](https://github.com/Agoric/agoric-sdk/commit/b4a1be8f600d60191570a3bbf42bc4c82af47b06))
* implement makeLoopback and makeFar without a membrane ([b0bccba](https://github.com/Agoric/agoric-sdk/commit/b0bccbabecc2902c9d9f7319ffb0c509bccc2d01))
* properly terminate & clean up after failed vats ([cad2b2e](https://github.com/Agoric/agoric-sdk/commit/cad2b2e45aece7dbc150c40dea194a3fea5dbb69))
* provide a button to activate the wallet from the bridge ([18f1cb2](https://github.com/Agoric/agoric-sdk/commit/18f1cb2793f9a3db25fcab09882fb6421e2e364b))





## [2.7.1](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.7.0...@agoric/sdk@2.7.1) (2020-08-31)


### Bug Fixes

* include exported.js in files list ([bd960c3](https://github.com/Agoric/agoric-sdk/commit/bd960c3b050862e998eec7fc838f14b1a2abb437))





# [2.7.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.6.0...@agoric/sdk@2.7.0) (2020-08-31)


### Bug Fixes

* actually test cosmic-swingset files in parallel ([e936999](https://github.com/Agoric/agoric-sdk/commit/e93699913772084247cc3ce475ffd47f810a96e1))
* add "TODO unimplemented"s ([#1580](https://github.com/Agoric/agoric-sdk/issues/1580)) ([7795f93](https://github.com/Agoric/agoric-sdk/commit/7795f9302843a2c94d4a2f42cb22affe1e91d41d))
* add default moniker to hosts ([08cc625](https://github.com/Agoric/agoric-sdk/commit/08cc6258d5eadadd363f79fd257ff3cacd442a0a))
* add less, vim, jq to vagrant docker image ([621859f](https://github.com/Agoric/agoric-sdk/commit/621859fc564a468b507151eb138885331eabe6d3))
* add shutdown() to atomicSwap, coveredCall, and sellItems. ([97dcd2e](https://github.com/Agoric/agoric-sdk/commit/97dcd2eab0a7150467c5776177f8cb879024bec9))
* allow faucet-helper.sh to work without web access ([8439ba3](https://github.com/Agoric/agoric-sdk/commit/8439ba34ed15347428c7fcffcb8b4458d49d6863))
* always rebuild the dweb config ([517041d](https://github.com/Agoric/agoric-sdk/commit/517041dd13ca16e5b915578b0f0cf6f8f27158fd))
* clean up E.when and E.resolve ([#1561](https://github.com/Agoric/agoric-sdk/issues/1561)) ([634046c](https://github.com/Agoric/agoric-sdk/commit/634046c0fc541fc1db258105a75c7313b5668aa0))
* clean up review issues ([9ad3b79](https://github.com/Agoric/agoric-sdk/commit/9ad3b79fe59055077ebdba5fcba762038f0f9fb2))
* commit kernel state in END_BLOCK, for reset robustness ([96d4912](https://github.com/Agoric/agoric-sdk/commit/96d491255baa1bbaf17716e54f68947c13a50ad4))
* cope with delivery failures after replay due to dead vats ([37dba42](https://github.com/Agoric/agoric-sdk/commit/37dba4263f8aa2d25da402cabdf5601130d7cd45))
* correct and simplify the bootstrap process ([cb95764](https://github.com/Agoric/agoric-sdk/commit/cb9576453bec3b375c75abea055a09066e719dd7))
* create a dweb `start.sh` so we keep the same systemd service ([a58abb4](https://github.com/Agoric/agoric-sdk/commit/a58abb46bcd10adc0460312acd7f877411478d4c))
* deduplicate redundant work ([#1550](https://github.com/Agoric/agoric-sdk/issues/1550)) ([b89651c](https://github.com/Agoric/agoric-sdk/commit/b89651c6355a058f97b4719be336a31a3ef273b4))
* don't delete the questionID too soon ([1e51cef](https://github.com/Agoric/agoric-sdk/commit/1e51cef98cdf9e4267b92378c6bf6d0e3fdecf85))
* don't early-bind the Promise constructor; metering changes it ([a703e6f](https://github.com/Agoric/agoric-sdk/commit/a703e6f1091b595d7f4fd368ec2c2407e5e89695))
* don't hardcode Agoric parameters within Ansible scripts ([19d0e13](https://github.com/Agoric/agoric-sdk/commit/19d0e1387060b54d1cfe9892039105a2270570ed))
* don't modify the original 'config' object ([36496ab](https://github.com/Agoric/agoric-sdk/commit/36496ab03e756cc4b266f8fd623ffeabf97fa9bf)), closes [#1490](https://github.com/Agoric/agoric-sdk/issues/1490)
* don't pluralise anything but the last path element ([e173dbc](https://github.com/Agoric/agoric-sdk/commit/e173dbc9744e80bdc3fcd50d9530a2144e717bf1))
* don't reinstall the wallet unless it's the first time ([8637331](https://github.com/Agoric/agoric-sdk/commit/8637331e490859a8f7a318a95813de04872a964a))
* don't treat HandledPromises specially ([9015744](https://github.com/Agoric/agoric-sdk/commit/9015744f9eb57467feed5619c135f99455d19f80))
* downgrade ([f1f7a7b](https://github.com/Agoric/agoric-sdk/commit/f1f7a7b25c59b8ad3c9a5d32425d17d2a4c34bf4))
* explicitly use utf-8 ([5971544](https://github.com/Agoric/agoric-sdk/commit/59715442413ab69e874d3725eba23b82a777982f))
* force `--pruning=nothing` until we upgrade to Stargate ([9a3d54b](https://github.com/Agoric/agoric-sdk/commit/9a3d54bac54a92babe6fa1610c2a8c88f85a1e6a))
* get fake-chain working again, also with async commit ([8b30196](https://github.com/Agoric/agoric-sdk/commit/8b30196f54f6a608c4c0e3e4587e3500e4e67ffd))
* get git-revision.txt when out of tree ([3275022](https://github.com/Agoric/agoric-sdk/commit/32750224fa7009e8090d9e505225f477c777edaa))
* handle post-replay notifications to a dead vat ([4c0e343](https://github.com/Agoric/agoric-sdk/commit/4c0e343dc5dd8ed79240cfdd64e19b260ef8b401))
* handle relative paths more better ([e979475](https://github.com/Agoric/agoric-sdk/commit/e979475f4b5c77a1e084f82c814f866bf1a01457))
* incorporate review feedback ([9812c61](https://github.com/Agoric/agoric-sdk/commit/9812c61ecf489b41769316fb872ee7cc9cc5460f))
* kickOut takes a `reason` error rather than a `message` string ([#1567](https://github.com/Agoric/agoric-sdk/issues/1567)) ([c3cd536](https://github.com/Agoric/agoric-sdk/commit/c3cd536f16dcf30208d88fb1c81376aa916e2a40))
* make rename return a promise so as not to race ([712b095](https://github.com/Agoric/agoric-sdk/commit/712b095bb0d6157ea176d7c7a82aef92757d860c))
* many small review comments ([#1533](https://github.com/Agoric/agoric-sdk/issues/1533)) ([ee8f782](https://github.com/Agoric/agoric-sdk/commit/ee8f782578ff4f2ea9e0ec557e14d1f52c795ca9))
* minor: rearrange asserts in Remotable ([#1642](https://github.com/Agoric/agoric-sdk/issues/1642)) ([c43a08f](https://github.com/Agoric/agoric-sdk/commit/c43a08fb1733596172a7dc5ca89353d837033e23))
* move faucet into SETUP_HOME/.. to share between chains ([76b6a5d](https://github.com/Agoric/agoric-sdk/commit/76b6a5db54ddf299a4933e5654a19f9763aa33bf))
* one less unnecessary "then" ([#1623](https://github.com/Agoric/agoric-sdk/issues/1623)) ([8b22ad6](https://github.com/Agoric/agoric-sdk/commit/8b22ad6ba9f056bfe01a2daf5a02396e20c3b516))
* only create-validator from the actual node ([6c76bcc](https://github.com/Agoric/agoric-sdk/commit/6c76bccae17d91b5e66ad6b43f9d684fec7d45cc))
* open-code the `yarn link` operation for silence and speed ([3b2671e](https://github.com/Agoric/agoric-sdk/commit/3b2671eea59c52a16298dea2af2a6ba5e7ec42c0))
* reduce inconsistency among our linting rules ([#1492](https://github.com/Agoric/agoric-sdk/issues/1492)) ([b6b675e](https://github.com/Agoric/agoric-sdk/commit/b6b675e2de110e2af19cad784a66220cab21dacf))
* rely on HandledPromise shim ([5eb8e30](https://github.com/Agoric/agoric-sdk/commit/5eb8e30d0b726b596173d9ce00a6df46fdeac51d))
* remove --pruning=nothing flag, as it's unneeded ([48e1a40](https://github.com/Agoric/agoric-sdk/commit/48e1a40d4a439058d1fb9388f86d8532416a2e45))
* remove $BOOT_ADDRESS support ([3fd1e1d](https://github.com/Agoric/agoric-sdk/commit/3fd1e1de35a471287432737e5f16763d4d35040e))
* remove dynamic role from sim-chain ([1a3dd57](https://github.com/Agoric/agoric-sdk/commit/1a3dd57415c452f9527d9ccfe2c2f81429fd3e23))
* remove obsolete produce-promise package ([#1542](https://github.com/Agoric/agoric-sdk/issues/1542)) ([a4a173f](https://github.com/Agoric/agoric-sdk/commit/a4a173f17aeddd9f6c916e008bb4a66aea41f17c))
* remove one layer of caching (the mailbox state) ([50b1d7e](https://github.com/Agoric/agoric-sdk/commit/50b1d7e65375c137c8d70093a3f115955d10dec7))
* send and receive Remotable tags ([#1628](https://github.com/Agoric/agoric-sdk/issues/1628)) ([1bae122](https://github.com/Agoric/agoric-sdk/commit/1bae1220c2c35f48f279cb3aeab6012bce8ddb5a))
* stricter marshal requirements ([#1499](https://github.com/Agoric/agoric-sdk/issues/1499)) ([9d8ba97](https://github.com/Agoric/agoric-sdk/commit/9d8ba9763defb290de71668d08faa8619200d117))
* try to use HandledPromise for pipelineability ([848a90f](https://github.com/Agoric/agoric-sdk/commit/848a90f8d7427e2c31dc5764555da2fde42eac8d))
* update vagrant/Dockerfile to buster and add to build ([c8da8fc](https://github.com/Agoric/agoric-sdk/commit/c8da8fc7b9194cc099bf4ec63fdadb84d8a7d8d1))
* upgrade Docker images to Debian buster ([1016cc5](https://github.com/Agoric/agoric-sdk/commit/1016cc5fa27624d2265398d8900f2d4847c9864f))
* use REMOTE_STYLE rather than 'presence' to prepare ([#1577](https://github.com/Agoric/agoric-sdk/issues/1577)) ([6b97ae8](https://github.com/Agoric/agoric-sdk/commit/6b97ae8670303631313a65d12393d7ad226b941d))
* **ag-nchainz:** provision solos with agoric.vattp capability ([e9fc9ed](https://github.com/Agoric/agoric-sdk/commit/e9fc9edad2bd4747ca1f7afd42231663cf20fe21))
* **agoric-cli:** yarn link after yarn install ([aea7f93](https://github.com/Agoric/agoric-sdk/commit/aea7f931e710affe08beaabd039ef69c41e51bf1))
* `ERef<T>` is `T | PromiseLike<T>` ([#1383](https://github.com/Agoric/agoric-sdk/issues/1383)) ([8ef4d66](https://github.com/Agoric/agoric-sdk/commit/8ef4d662dc80daf80420c0c531c2abe41517b6cd))
* add `local.comms` object as well ([cf5566f](https://github.com/Agoric/agoric-sdk/commit/cf5566f2e6f7848c3ca1d4034394dcc83074d02b))
* add local.vattp to localBundle ([a26165a](https://github.com/Agoric/agoric-sdk/commit/a26165aee025d302bc2c9a430917fa5a4bd0fb8b))
* add tests & fix for ZCF handling of crashes in contract code ([3cccf66](https://github.com/Agoric/agoric-sdk/commit/3cccf66cb85e91c6db10ed9530ec01f596e4cc8a))
* better debugging of three-party handoff ([f4c6442](https://github.com/Agoric/agoric-sdk/commit/f4c6442211118e03b214e12ee15a10fd637b4a6e))
* change the default wallet to dapp-svelte-wallet ([6722f23](https://github.com/Agoric/agoric-sdk/commit/6722f2384d4cfe65a0fc8a79ae0a03e1fbcb62e8))
* clear up and solve the races around ag-solo initialisation ([f6482ac](https://github.com/Agoric/agoric-sdk/commit/f6482ac7f5f01cc4c7626610e81c191fd939c69a))
* correct minor documentation error ([6856de0](https://github.com/Agoric/agoric-sdk/commit/6856de00d57ae70a21297fbc2aa3abcc5449a679))
* correct problems that benchmarking turned up ([30f3f87](https://github.com/Agoric/agoric-sdk/commit/30f3f87d4e734b96beaf192f25212dc7d575674d))
* deprecate getMathHelpersName for getMathHelperName ([#1409](https://github.com/Agoric/agoric-sdk/issues/1409)) ([2375b28](https://github.com/Agoric/agoric-sdk/commit/2375b28c1aadf8116c3665cec0ef0397e6a91102))
* excise @agoric/harden from the codebase ([eee6fe1](https://github.com/Agoric/agoric-sdk/commit/eee6fe1153730dec52841c9eb4c056a8c5438b0f))
* highlight selected menu ([4c3c169](https://github.com/Agoric/agoric-sdk/commit/4c3c1690f92992634a64d5bbc05d4ccd3ba1b1c1))
* improve wallet contents migration, but still not great ([650f4f5](https://github.com/Agoric/agoric-sdk/commit/650f4f584b8d724260479e003da92033b626d863))
* introduce summaryLine to allow tooltip with ripple ([08393a8](https://github.com/Agoric/agoric-sdk/commit/08393a8edd64efaa831c29f341d4b4bedb93302f))
* make local.vattp and agoric.vattp symmetrical ([9b366d0](https://github.com/Agoric/agoric-sdk/commit/9b366d02667404fca7fa88ee1c70f0e27b9fd209))
* make MenuButton more subtle ([3cd6315](https://github.com/Agoric/agoric-sdk/commit/3cd63150bb7a8cb2347f9625e855321fe173d2bf))
* minor fix to zoeTest benchmark ([067dc9b](https://github.com/Agoric/agoric-sdk/commit/067dc9b346ab2ed6a8680eeeef14695679002111))
* more cleanups ([b2cff30](https://github.com/Agoric/agoric-sdk/commit/b2cff30167f4646ae3ff3aa47afcc5534ae03155))
* need type decl for HandledPromise.reject ([#1406](https://github.com/Agoric/agoric-sdk/issues/1406)) ([aec2c99](https://github.com/Agoric/agoric-sdk/commit/aec2c9940b4ba580ec98f0a1f94b3cadde7fa2eb))
* quieter CapTP disconnections on the ag-solo side ([6bfe9d6](https://github.com/Agoric/agoric-sdk/commit/6bfe9d64be3cd56a69191e2f22769109162fe50a))
* **ag-nchainz:** give solo vats the `agoric.vattp` power ([a58bbba](https://github.com/Agoric/agoric-sdk/commit/a58bbbaaea964dd2423586dde330803fb6176c31))
* **swingset:** check promise resolution table during comms.inbound ([e9d921a](https://github.com/Agoric/agoric-sdk/commit/e9d921a68ad567f66e6928cfbddfc0a1bf21e600)), closes [#1400](https://github.com/Agoric/agoric-sdk/issues/1400)
* more UI cleanups ([ac1d2f7](https://github.com/Agoric/agoric-sdk/commit/ac1d2f72a0365ea9bc912daf0454819e25f7752d))
* remove obsolete "unwrap" ([#1360](https://github.com/Agoric/agoric-sdk/issues/1360)) ([5796e0e](https://github.com/Agoric/agoric-sdk/commit/5796e0e6f8bfd00619f725bdac4ff5743610a52f))
* rename producePromise to makePromiseKit ([#1329](https://github.com/Agoric/agoric-sdk/issues/1329)) ([1d2925a](https://github.com/Agoric/agoric-sdk/commit/1d2925ad640cce7b419751027b44737bd46a6d59))
* shuffle around exports ([c95282e](https://github.com/Agoric/agoric-sdk/commit/c95282ec5b72260353441ec8dd2ad0eaba9cdfa8))
* style payments ([b7e6176](https://github.com/Agoric/agoric-sdk/commit/b7e6176eb3a4c674d67e7c26069568a55b0b1659))
* supply default disconnected abort exception ([274ed53](https://github.com/Agoric/agoric-sdk/commit/274ed53fb99c0fb135b8beae984e3f0b731dbb81))
* tooltips within ListCards now work ([e389dd1](https://github.com/Agoric/agoric-sdk/commit/e389dd1338c50a2fc1ef53e116954058ddf0546a))
* upgrade to SES 0.10.0 ([bf8ceff](https://github.com/Agoric/agoric-sdk/commit/bf8ceff03ebb790728c18a131b6305ca7f7f4a4f))
* use petname for zoe invite display, too ([2559e0d](https://github.com/Agoric/agoric-sdk/commit/2559e0d514fd7dbb2f088b2cc48175be60938474))
* **agoric-cli:** only create yarn links in _agstate/yarn-links ([bb80fb2](https://github.com/Agoric/agoric-sdk/commit/bb80fb255da8dee9347b674d2661f37030d19860))
* **captp:** make more code paths fail on disconnect ([5c0c509](https://github.com/Agoric/agoric-sdk/commit/5c0c5097acd4dacf2b594d84606d0494d71f0216))
* **swingset:** add makeNetworkHost to vat-tp ([4520633](https://github.com/Agoric/agoric-sdk/commit/4520633b838bfae8a8fa3b82a0d0029b7fa75280)), closes [#259](https://github.com/Agoric/agoric-sdk/issues/259)
* add a version check assertion to enforce Golang 1.14+ ([433d1ce](https://github.com/Agoric/agoric-sdk/commit/433d1ce78d92d5d89beb460075a85acaa6455fa5))
* ensure all presences are resolved before creating bundle ([c66e58c](https://github.com/Agoric/agoric-sdk/commit/c66e58c948236eccac9cc3ecdaf1777e9c6464d4))
* properly abort all communication when CapTP is disconnected ([c2c0196](https://github.com/Agoric/agoric-sdk/commit/c2c0196001c2bc94d14645272b931e39ee38c197))
* **SwingSet:** reenable getInterfaceOf/Remotable vatPowers ([fd7a8ca](https://github.com/Agoric/agoric-sdk/commit/fd7a8cafa8b8544f4e47738247e1aaab3d980fe8))
* get line numbers to be proper again ([8c31701](https://github.com/Agoric/agoric-sdk/commit/8c31701a6b4353e549b7e8891114a41ee48457c8))
* match notifier semantics to async iterables ([#1332](https://github.com/Agoric/agoric-sdk/issues/1332)) ([efbf359](https://github.com/Agoric/agoric-sdk/commit/efbf359e7f1b4ca0eb07e3ae8a12e1f061758927))
* Protect ag-solo script from shells with prompt strings ($PS1) ([3d5cbe3](https://github.com/Agoric/agoric-sdk/commit/3d5cbe3ad9ea9d3829b5d4de7691bef50c544ea2))
* rearrange `home` into `local` and `agoric` ([44ba391](https://github.com/Agoric/agoric-sdk/commit/44ba391db3551b40f5a45ba68cc4e0b7689a8299))
* remove controller ag-solo, as it is obsolete ([c698e4c](https://github.com/Agoric/agoric-sdk/commit/c698e4c8fc71f3a334bf546dce8d1994c2a68adf))
* remove more controller references ([c9af5a1](https://github.com/Agoric/agoric-sdk/commit/c9af5a11ac5ffa1afcbc47c6399f35945055e3b2))
* remove obsolete bundle command ([e87fecc](https://github.com/Agoric/agoric-sdk/commit/e87fecc1431c8c13bd26b9dbb678bcd29615fafd))
* **bundle-source:** fix comment misparse, make require optional ([e8f4127](https://github.com/Agoric/agoric-sdk/commit/e8f412767c5ad8a0e75aa29357a052fd2164e811)), closes [#1281](https://github.com/Agoric/agoric-sdk/issues/1281) [#362](https://github.com/Agoric/agoric-sdk/issues/362)
* **create-agoric-cli:** don't follow symlinks ([26e02ae](https://github.com/Agoric/agoric-sdk/commit/26e02ae102316b935e37d5b6a161b98e88d54620))
* **install-metering-and-ses:** ensure HandledPromise is metered ([8be98f2](https://github.com/Agoric/agoric-sdk/commit/8be98f255e3bb6b26afbff8e6dd0593ad8f0b665))
* **marshal:** make toString and Symbol.toStringTag non-enumerable ([fc616ef](https://github.com/Agoric/agoric-sdk/commit/fc616eff1c3f61cd96e24644eeb76d8f8469a05c))
* **SwingSet:** remove needless E argument from network functions ([5e5c919](https://github.com/Agoric/agoric-sdk/commit/5e5c9199b17a986bd3089720a8985e49a297c77c))
* remove unnecessary types ([e242143](https://github.com/Agoric/agoric-sdk/commit/e24214342062f908ebee91a775c0427abc21e263))
* rename produceNotifier to makeNotifierKit ([#1330](https://github.com/Agoric/agoric-sdk/issues/1330)) ([e5034f9](https://github.com/Agoric/agoric-sdk/commit/e5034f94e33e9c90c6a8fcaff70c11773e13e969))
* silence more debug messages ([e5ffb67](https://github.com/Agoric/agoric-sdk/commit/e5ffb6786126cad7a20b85039ffdbab1fc6c9d11))
* tweak more types, make getVatAdmin into a function ([8c1e9d2](https://github.com/Agoric/agoric-sdk/commit/8c1e9d21fbdb7fa652100d98d5fdb13ad406f03f))
* **swingset:** createVatDynamically option to disable metering ([388af11](https://github.com/Agoric/agoric-sdk/commit/388af112c583d2bbc8fd2f4db218e637ffbeb259)), closes [#1307](https://github.com/Agoric/agoric-sdk/issues/1307)
* **swingset:** remove 'require' from vatEndowments ([4b584df](https://github.com/Agoric/agoric-sdk/commit/4b584df4131812562edf06c9b45b1816dde6e3eb)), closes [#1214](https://github.com/Agoric/agoric-sdk/issues/1214)
* **swingset:** replay dynamic vats properly ([7d631bc](https://github.com/Agoric/agoric-sdk/commit/7d631bccee1ff2cd38219ea2995298a1dbfeec0d)), closes [#1480](https://github.com/Agoric/agoric-sdk/issues/1480)
* **swingset:** rewrite comms, probably add third-party forwarding ([a5f3e04](https://github.com/Agoric/agoric-sdk/commit/a5f3e040b79813ab066fd98b1f093a8585c0c98f)), closes [#1535](https://github.com/Agoric/agoric-sdk/issues/1535) [#1404](https://github.com/Agoric/agoric-sdk/issues/1404)
* **top-level:** remove depd patch-package workaround ([354a3ae](https://github.com/Agoric/agoric-sdk/commit/354a3aecc3c26f06d90d5648201ad32f4269b51a)), closes [#1229](https://github.com/Agoric/agoric-sdk/issues/1229)
* **zoe:** don't [@typedef](https://github.com/typedef) areRightsConserved ([281f7b1](https://github.com/Agoric/agoric-sdk/commit/281f7b1413e570b3a2f7fa9509c74f22030b3936))
* **zoe:** unify InstanceRecord usage (.instanceHandle -> .handle) ([9af7903](https://github.com/Agoric/agoric-sdk/commit/9af790322fc84a3aa1e41e957614fea2873c63b1))
* make scenario2 Makefile rules work again ([3c2647a](https://github.com/Agoric/agoric-sdk/commit/3c2647aa5a22c785600f9dbef7a328841ba37607))
* persist the savedChainSends for better recovery ([d8f0eb6](https://github.com/Agoric/agoric-sdk/commit/d8f0eb6b900bdac6c8d110c05c1af38b76df462e))
* remove more BOOTSTRAP_ADDRESS references ([f2141b6](https://github.com/Agoric/agoric-sdk/commit/f2141b68fe8f239e575e4a4dc7e6be70b1ffc7f0))
* remove remaining set-json.js instances ([987426f](https://github.com/Agoric/agoric-sdk/commit/987426f98fc4da01e32034df3f962c731fa0f6bb))
* seal payload used for quoted details ([#1610](https://github.com/Agoric/agoric-sdk/issues/1610)) ([1acd5ba](https://github.com/Agoric/agoric-sdk/commit/1acd5baa3e7f0185823c929409f8aecddab36a3a))
* set the simpleExchange notifier's initial order book state ([70c17fd](https://github.com/Agoric/agoric-sdk/commit/70c17fdffbdf84e9999aac962300ffc23698a8ca))
* should be typed ERef ([#1611](https://github.com/Agoric/agoric-sdk/issues/1611)) ([403eba3](https://github.com/Agoric/agoric-sdk/commit/403eba3afba1853773891f62af6c039d8b9d03c4))
* since we don't simulate, make sure our gas estimate is good ([a0a2df5](https://github.com/Agoric/agoric-sdk/commit/a0a2df5e614bc64a2ceddb4f988ba52dc611ffad))
* skip another failing test discovered by AVA ([8103c83](https://github.com/Agoric/agoric-sdk/commit/8103c8340540b8d6f83b38b2e912a22ec66a75b2))
* stop depending on config.toml contents in set-defaults ([0dca9ff](https://github.com/Agoric/agoric-sdk/commit/0dca9ffa3cf61bf46d633497a538b8b58bee08ca))
* tweaks from PR review ([3c51b0f](https://github.com/Agoric/agoric-sdk/commit/3c51b0faca307fac957cf5f0106fe1973615eb68))
* update JS typings ([20941e6](https://github.com/Agoric/agoric-sdk/commit/20941e675302ee5905e4825638e661065ad5d3f9))
* upgrade to SES v0.10.1, and make HandledPromise shim work ([5d0adea](https://github.com/Agoric/agoric-sdk/commit/5d0adea1b3b7369ae8131df55f99b61e0c428542))
* use `agoric set-default` instead of set-json.js ([7e1f612](https://github.com/Agoric/agoric-sdk/commit/7e1f612ff3f78c9e614cc63c9aa98e0d1f1a2dd5))
* use and export x/swingset/storage for all on-chain storage ([c6bf0e2](https://github.com/Agoric/agoric-sdk/commit/c6bf0e26cdcc4ecd78ba2bdbe7a29463d52da36a))
* use Babel to strip comments and unmap line numbers ([24edbbc](https://github.com/Agoric/agoric-sdk/commit/24edbbc985500233ea876817228bbccc71b2bac3))
* use full harden when creating E ([adc8e73](https://github.com/Agoric/agoric-sdk/commit/adc8e73625975378e4856917146c8fd152d7c897))
* use itemsMath.isEmpty() rather than grovelling through value ([cdc09a1](https://github.com/Agoric/agoric-sdk/commit/cdc09a1bfa4c4818c447848ceb5da8f9551c6412))
* use kickOut() rather than exit() when the offer is turned down. ([44aee5b](https://github.com/Agoric/agoric-sdk/commit/44aee5b1da64cc2c24eda3d629d051e7c57896a5))
* use only loc.start to ensure nodes begin on the correct line ([dc3bc65](https://github.com/Agoric/agoric-sdk/commit/dc3bc658cc2900a1f074c8d23fd3e5bae9773e18))


### Features

* adaptors between notifiers and async iterables ([#1340](https://github.com/Agoric/agoric-sdk/issues/1340)) ([b67d21a](https://github.com/Agoric/agoric-sdk/commit/b67d21aae7e66202e3a5a3f13c7bd5769061230e))
* add `ag-setup-solo` compatibility, `ag-solo setup` ([4abe446](https://github.com/Agoric/agoric-sdk/commit/4abe4468a0626c2adfd170459c26c3fe973595a0))
* add `agoric set-defaults` ([98e5fe9](https://github.com/Agoric/agoric-sdk/commit/98e5fe910cbf895d1f6b65d257b8530c1cb933f4))
* add a /dev/sda -> /home filesystem for Digital Ocean ([71895fc](https://github.com/Agoric/agoric-sdk/commit/71895fcb8489535f8f29569d65aaa889f94424e0))
* add a stub for decentralised web (dweb) ([d81b1f2](https://github.com/Agoric/agoric-sdk/commit/d81b1f262f365a994e2d5e29ff0aa027ed7b2841))
* add ansible plays for shuffling configs around ([d153aa2](https://github.com/Agoric/agoric-sdk/commit/d153aa24c43fef84614653fab401ce98d20b8c02))
* add export-genesis playbook ([cba5ae0](https://github.com/Agoric/agoric-sdk/commit/cba5ae0e5cf82b61c8d95f5be57a7d9edb94e5b1))
* add getIssuerForBrand to zoe ([#1276](https://github.com/Agoric/agoric-sdk/issues/1276)) ([4fe3c83](https://github.com/Agoric/agoric-sdk/commit/4fe3c83a70000cb9f933bf6e158cc2bc1862bae9))
* add HandledPromise shim before lockdown() ([5574462](https://github.com/Agoric/agoric-sdk/commit/55744622a7ff5909b6cc296cdf6ab0f2a6ee2e0c))
* add want, exit to empty seat ([#1584](https://github.com/Agoric/agoric-sdk/issues/1584)) ([ae303e1](https://github.com/Agoric/agoric-sdk/commit/ae303e1d15ee467876f708d8d91b6cd7d5d4e640))
* allow dapps to suggest petnames for issuer/brand, instance, installation ([#1308](https://github.com/Agoric/agoric-sdk/issues/1308)) ([0eb378b](https://github.com/Agoric/agoric-sdk/commit/0eb378bdd70fe008e535e818148a915c3f3db34c))
* allow pre-built kernelBundles for faster unit tests ([8c0cc8b](https://github.com/Agoric/agoric-sdk/commit/8c0cc8b64a11a50b37a26dd59f338df90ffb9244)), closes [#1643](https://github.com/Agoric/agoric-sdk/issues/1643)
* augment kernelDump to account for dynamic vat schema additions ([b7dde66](https://github.com/Agoric/agoric-sdk/commit/b7dde669dccfec3c052ee5ca7348ebd7edd2854b))
* clean up after dead vats ([7fa2661](https://github.com/Agoric/agoric-sdk/commit/7fa2661eeddcad36609bf9d755ff1c5b07241f53))
* copy dependency graph visualizer from SES-shim ([#1650](https://github.com/Agoric/agoric-sdk/issues/1650)) ([94f1216](https://github.com/Agoric/agoric-sdk/commit/94f1216909ef76d70ab99c9c9649c4365bcd36cb))
* display kernel objects & promises in numeric order ([c344b41](https://github.com/Agoric/agoric-sdk/commit/c344b41670d4e368131995dda2254a266a2587e4))
* ERTP v0.7.0 ([#1317](https://github.com/Agoric/agoric-sdk/issues/1317)) ([2d66b5a](https://github.com/Agoric/agoric-sdk/commit/2d66b5ae1feaeef1024fc6bfac7066a385ed5207)), closes [#1306](https://github.com/Agoric/agoric-sdk/issues/1306) [#1305](https://github.com/Agoric/agoric-sdk/issues/1305)
* introduce the shim/no-shim exports to distinguish callers ([d2a6bff](https://github.com/Agoric/agoric-sdk/commit/d2a6bffd74042e02cf0fbca88d2caf334a8de261))
* make production Zoe use prebundled zcf ([138ddd7](https://github.com/Agoric/agoric-sdk/commit/138ddd70cba6e1b11a4a8c0d59f15a018f8bb0e6))
* make Zoe in cosmic-swingset work with prebundled zcf ([2859650](https://github.com/Agoric/agoric-sdk/commit/285965047ba92608b39d9fa496b1bf2b952d748d))
* new iterated Zoe benchmark that uses atomicSwap ([3719907](https://github.com/Agoric/agoric-sdk/commit/3719907e1090af9ad82db2f966c9b523dfb9a55f))
* plumb up the chainID into BEGIN_BLOCK and AG_COSMOS_INIT ([23aa90d](https://github.com/Agoric/agoric-sdk/commit/23aa90d5750a0c3776613febffd8c388f4680861))
* update exchange benchmark to re-use simpleExchange contract ([3ecbee0](https://github.com/Agoric/agoric-sdk/commit/3ecbee059197dea5ff37a21465f68be9bcb463b8))
* **swingset:** Add Node.js Worker (thread) -based VatManager ([61615a2](https://github.com/Agoric/agoric-sdk/commit/61615a2ea8de19aa4a1cea20960dcbab70db9f39)), closes [#1299](https://github.com/Agoric/agoric-sdk/issues/1299) [#1127](https://github.com/Agoric/agoric-sdk/issues/1127) [#1384](https://github.com/Agoric/agoric-sdk/issues/1384)
* **swingset:** add subprocess+node -based VatManager ([184c912](https://github.com/Agoric/agoric-sdk/commit/184c9126d33a7f987d6d770df39416f0154e1045)), closes [#1374](https://github.com/Agoric/agoric-sdk/issues/1374)
* **swingset-vat:** add xs-worker managerType ([2db022d](https://github.com/Agoric/agoric-sdk/commit/2db022d966a416c9b765c18ed543dd5adb31cc6d))
* **xs-vat-worker:** locateWorkerBin finds built executable ([aecaeb1](https://github.com/Agoric/agoric-sdk/commit/aecaeb143668825183c5aa1b9a5c76d954b51501))
* add nav and paging, and improve formatting ([9a22fc0](https://github.com/Agoric/agoric-sdk/commit/9a22fc06343a5400436f9d60a524b691589ca5ca))
* add the Svelte wallet ([f950400](https://github.com/Agoric/agoric-sdk/commit/f950400eeb9323729616012ff1c319d05e087e93))
* allow dapps to suggest a petname that is forwarded ([1183a19](https://github.com/Agoric/agoric-sdk/commit/1183a19d5887f62af4ac14cded91c3685df65c2d))
* allow the specification of `--persistent-peers` ([2a86410](https://github.com/Agoric/agoric-sdk/commit/2a86410d3f439918009648ec9458f6cfd751a38b))
* defer the wallet UI until the start process ([18ee099](https://github.com/Agoric/agoric-sdk/commit/18ee0990836280478917265bbab966dee15e3dfe))
* implement add-egress, add-delegate ([ffd474a](https://github.com/Agoric/agoric-sdk/commit/ffd474abc292fbda4f314fb1715af7b4b6c92dcd))
* implement wallet upgrade, though not for dapp-react-wallet ([8945ebb](https://github.com/Agoric/agoric-sdk/commit/8945ebb695d42f5124495275d3412b721f1cfc07))
* introduce a $ready store for when captp is initialised ([d9d73d2](https://github.com/Agoric/agoric-sdk/commit/d9d73d240aa73a81b770c1d3ced7a9750c50b0fa))
* move faucet account onto the controller where it is safer ([8ba1c46](https://github.com/Agoric/agoric-sdk/commit/8ba1c462b9ecd5b47c19b7fe473b49de01e268ee))
* much better formatting ([f331df0](https://github.com/Agoric/agoric-sdk/commit/f331df0006867a4409e974aad5885e649abf2172))
* phase 1 of vat termination: stop talking to or about the vat ([0b1aa20](https://github.com/Agoric/agoric-sdk/commit/0b1aa20630e9c33479d2c4c31a07723819598dab))
* Phase 1a of vat termination: reject promises from the dead vat ([80fc527](https://github.com/Agoric/agoric-sdk/commit/80fc5274f2ab295bf00026b30b7bd32d7508c475))
* Phase 2 of vat termination: throw away in memory remnants of dead vat ([9d6ff42](https://github.com/Agoric/agoric-sdk/commit/9d6ff42a081109281fc6e709d311f86d8094be61))
* provision without Python ([1fdc1d3](https://github.com/Agoric/agoric-sdk/commit/1fdc1d31e7684705ebaf337be19271dbcdd9cbdc))
* reintroduce anylogger as the console endowment ([98cd5cd](https://github.com/Agoric/agoric-sdk/commit/98cd5cd5c59e9121169bb8104b70c63ccc7f5f01))
* separate generation/writing of config.toml from genesis.json ([eabe493](https://github.com/Agoric/agoric-sdk/commit/eabe4939893fac124719cf5bdc68761f95cf09e3))
* separate wallet implementation from ag-solo ([0bf7eab](https://github.com/Agoric/agoric-sdk/commit/0bf7eab1f575a8805e3908f38271cd3ce1bff053))
* style the offers ([c74ec50](https://github.com/Agoric/agoric-sdk/commit/c74ec50f180dd9d2973ab1a6c4c2f7afb89546a8))
* support use of module references in swingset config sourceSpecs ([1c02653](https://github.com/Agoric/agoric-sdk/commit/1c0265353dcbb88fa5d2c7d80d53ebadee49936d))
* swingset-runner zoe demos to use pre-bundled zcf ([3df964a](https://github.com/Agoric/agoric-sdk/commit/3df964a10f61715fa2d72b1c408bb1903df61181))
* use debugName to differentiate sim-chain instances ([0efc33f](https://github.com/Agoric/agoric-sdk/commit/0efc33fafbeefeff587f94251dc3052179b17642))
* use ListCard for Issuers ([a7ec550](https://github.com/Agoric/agoric-sdk/commit/a7ec5508ef740d8d230f7fb5dd8ce9f0d3df68e9))
* use npm style imports with XS build tools via compartmap ([903027a](https://github.com/Agoric/agoric-sdk/commit/903027a30299e9d9b03246bb0476bc4b94fddcf9))
* Zoe support for prebundled zcf ([60050a5](https://github.com/Agoric/agoric-sdk/commit/60050a5be51ebe47ae1365fe134a4ea222b010c0))
* **agoric:** make `agoric --sdk install` use `yarn link` ([3a53185](https://github.com/Agoric/agoric-sdk/commit/3a53185510b307bdc048255f27f7493999693886))
* **agoric-cli:** quieter deployment progress ([11b60c1](https://github.com/Agoric/agoric-sdk/commit/11b60c10bdaec1ecccebb42f88f93d22cdcdbe8c))
* **agoric-cli:** update package.jsons during install ([a4ff356](https://github.com/Agoric/agoric-sdk/commit/a4ff356b42a52b47bc8ab7c4dba02fb5ade30f4b))
* **captp:** allow onReject handler to avoid unhandled promise ([f76c804](https://github.com/Agoric/agoric-sdk/commit/f76c804bb47ad8be71a9c512800c8b864edd7e6a))
* **cosmic-swingset:** add attenuated vattp to fake chain clients ([e6f6aeb](https://github.com/Agoric/agoric-sdk/commit/e6f6aeb6ed64ccf5608cbe6e26fd429283ab8a2e))
* **cosmic-swingset:** send powerFlags from tx provision-one ([5b68af5](https://github.com/Agoric/agoric-sdk/commit/5b68af594b5c8ea0732eb70aeae8ed5139b7b6cb))
* **vattp:** allow specifying a console object for logging ([ae1a2a0](https://github.com/Agoric/agoric-sdk/commit/ae1a2a03bf2f823b5420b8777ec6c436cbb4b349))
* use SES for the wallet frontend ([3ba89dc](https://github.com/Agoric/agoric-sdk/commit/3ba89dc4b2f5cf1d3a2cf60b3c7694a2dbf456c9))





# [2.6.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.5.0...@agoric/sdk@2.6.0) (2020-06-30)


### Bug Fixes

* adjust agoric-cli genesis and config.toml params ([41614a6](https://github.com/Agoric/agoric-sdk/commit/41614a64cb0943b03b9f805c2aca82ae25acd880))
* better propagate and report egress query errors ([3489a6e](https://github.com/Agoric/agoric-sdk/commit/3489a6e316ca7a62f2085d5e1a7894bdc586a9bb))
* correct the export process, using a temporary cosmos-sdk patch ([db139c3](https://github.com/Agoric/agoric-sdk/commit/db139c3da77a90ffc383d9f606ef675f284920ee))
* remove controller-based provisioning in favour of tx ([023b0be](https://github.com/Agoric/agoric-sdk/commit/023b0be69c6805a6c85c7d1b199dac927448120e))
* systematically use bin/ag-chain-cosmos ([527ae65](https://github.com/Agoric/agoric-sdk/commit/527ae655acc95ccf9fd2968e551adbe6d2453113))
* use provisionpass for the bootstrap address ([b0c2b73](https://github.com/Agoric/agoric-sdk/commit/b0c2b73ec6ee5d0dda2d3a04c2b251a7ff0e0331))
* **bundle-source:** tests use install-ses ([f793424](https://github.com/Agoric/agoric-sdk/commit/f793424ea4314f5cf0fe61c6e49590b2d78e13c6))
* **captp:** stop creating dist bundles ([7067ae0](https://github.com/Agoric/agoric-sdk/commit/7067ae0e8afe122ee64f5652c45d0288b74516a5))
* **ERTP:** use install-ses for tests ([41478e5](https://github.com/Agoric/agoric-sdk/commit/41478e53c35a087a69b4c1a741007c3170a7b6ce))
* **swingset:** dynamic vats do not get control over their own metering ([c6e4118](https://github.com/Agoric/agoric-sdk/commit/c6e4118d0ef12a694586994e4c32b3569b6210b3))
* **swingset:** dynamic vats use named buildRootObject export ([605183b](https://github.com/Agoric/agoric-sdk/commit/605183b81bc02191c50d2bdea52bb99861d17055))
* **swingset:** raise meter FULL from 1e7 to 1e8 ([deb2c16](https://github.com/Agoric/agoric-sdk/commit/deb2c16fd6dd45e3e265fa450607ba4397b51505))
* **top-level:** use patch-package to fix depd-vs-SES incompatibility ([a8f1308](https://github.com/Agoric/agoric-sdk/commit/a8f1308f49a604973a95eb5253bc4050d03d016c)), closes [Agoric/SES-shim#251](https://github.com/Agoric/SES-shim/issues/251)
* add CSS to make REPL wrap correctly ([b156251](https://github.com/Agoric/agoric-sdk/commit/b156251dc79afee566ebcde5701e259a98b93e5b))
* also tame symbol properties of globally-reachable objects ([09498f4](https://github.com/Agoric/agoric-sdk/commit/09498f40e641843366f065e585c33ccb8efc0588))
* deal more gracefully with data sources that have a common base file name ([f05f3ba](https://github.com/Agoric/agoric-sdk/commit/f05f3ba70879d0312446f930881f32192fae42d6))
* delete c-list entries *before* notifying vats about promise resolutions ([7fb8a1f](https://github.com/Agoric/agoric-sdk/commit/7fb8a1f567cd32198e90e14eebaa6d5575479611))
* don't ignore duplicate packets ([bafac19](https://github.com/Agoric/agoric-sdk/commit/bafac19b73e4c385bfa7be3adeabe0a4a037c0b9))
* don't retire promises that resolve to data structures containing promises ([00098da](https://github.com/Agoric/agoric-sdk/commit/00098da1d9bf80565956d78fe592d78b0be9f2c1))
* don't simulate transactions since we don't use gas ([3f92256](https://github.com/Agoric/agoric-sdk/commit/3f92256dbd8a505f05ae262391a64dd76005580a))
* ensure keywords do not collide with numbers ([#1133](https://github.com/Agoric/agoric-sdk/issues/1133)) ([15623f3](https://github.com/Agoric/agoric-sdk/commit/15623f333928dc57fc07085f246a419f916ef4c0))
* eslint is tricksy, it is ([1245ebb](https://github.com/Agoric/agoric-sdk/commit/1245ebb686fd20112f17f6c3f5f422de76709e19))
* handle circular module references in nestedEvaluate ([9790320](https://github.com/Agoric/agoric-sdk/commit/97903204fa1bd2fd4fec339d7e27e234148ca126))
* make CHAIN_PORT configurable ([a3e76cb](https://github.com/Agoric/agoric-sdk/commit/a3e76cbd076979eeaca8bd0f901a3a388d610b19))
* miscellaneous cleanups ([b184312](https://github.com/Agoric/agoric-sdk/commit/b184312046fa3425b8051601eece3bc5f9d68889))
* much clearer IBC implementation ([d3ee754](https://github.com/Agoric/agoric-sdk/commit/d3ee75442d68daa019af184356ec81ed7804f78b))
* preserve `eval` identity to support direct eval ([d263118](https://github.com/Agoric/agoric-sdk/commit/d263118920b3036abaddb81f6d953acd8829df61))
* print circularity when it really is ([96b07d6](https://github.com/Agoric/agoric-sdk/commit/96b07d6484b1537d28e5e85f3348ebaf47873354))
* Recipient-side resolved promise retirement ([65010cf](https://github.com/Agoric/agoric-sdk/commit/65010cf2a9b6a09e1e55ee63745a5cfc5ddf6cf5))
* Recipient-side resolved promise retirement ([dc0aec9](https://github.com/Agoric/agoric-sdk/commit/dc0aec99658ec0a6dac1d3e52d1f17fdfcd40d0d))
* replace openDetail with quoting q ([#1134](https://github.com/Agoric/agoric-sdk/issues/1134)) ([67808a4](https://github.com/Agoric/agoric-sdk/commit/67808a4df515630ef7dc77c59054382f626ece96))
* Resolver-side resolved promise retirement ([401e86a](https://github.com/Agoric/agoric-sdk/commit/401e86a7eba8d018f7cb4284f86f473b94889ac8))
* Resolver-side resolved promise retirement ([7cb2984](https://github.com/Agoric/agoric-sdk/commit/7cb2984ee33e8779ad8713637f125d7b0aaf8bb7))
* shorten chain cadence to 2 seconds (instead of default 5) ([12a5688](https://github.com/Agoric/agoric-sdk/commit/12a568873236565491b90996c93b41b2edbdc055))
* spawner leak, delete dead code ([#1132](https://github.com/Agoric/agoric-sdk/issues/1132)) ([201768f](https://github.com/Agoric/agoric-sdk/commit/201768f28597a706907f6108ca749f94e0eb5d19))
* tweak the config.toml for local-chain ([a1e815b](https://github.com/Agoric/agoric-sdk/commit/a1e815bd7632574a2e3012651974182f536a9288))
* update stat collection to account for promise retirement ([3f242dd](https://github.com/Agoric/agoric-sdk/commit/3f242dd2a80bf720830baaaafd4758a5888cd36c))


### Features

* **swingset:** activate metering of dynamic vats ([96eb63f](https://github.com/Agoric/agoric-sdk/commit/96eb63fbd641fdbddbd790c201af9420e9524937))
* **swingset:** allow vats to be defined by a buildRootObject export ([dce1fd4](https://github.com/Agoric/agoric-sdk/commit/dce1fd423f70b2830c77f238586cb58a43aab930))
* **zoe:** Zoe release 0.7.0 ([#1143](https://github.com/Agoric/agoric-sdk/issues/1143)) ([4a14455](https://github.com/Agoric/agoric-sdk/commit/4a14455e10f1e3807fd6633594c86a0f60026393))
* add `agoric start local-solo` ([15165b4](https://github.com/Agoric/agoric-sdk/commit/15165b4d069b966e2dae35a38ef8d1b3518802e7))
* add agoric start local-chain ([b2238aa](https://github.com/Agoric/agoric-sdk/commit/b2238aab3121e373ff31c2ef1d04a9597ac80bec))
* add benchmarking support to swingset-runner ([19a4ef7](https://github.com/Agoric/agoric-sdk/commit/19a4ef7b87c661b6774a4532e401dd96a23b0a3d))
* add facility for capturing and graphing kernel stats ([0df83b3](https://github.com/Agoric/agoric-sdk/commit/0df83b3b198632003abd38026b3136e21f99cd0b))
* add hook to pre-execute one round of benchmarking before starting to measure ([890f88a](https://github.com/Agoric/agoric-sdk/commit/890f88a511e8346c926a4c6fbf2f2320b404a9c2))
* add new transaction to provision a single address ([d75c867](https://github.com/Agoric/agoric-sdk/commit/d75c8675e3970d6b3bfa1cb048e648f290277d25))
* add stats collection facility to kernel ([1ea7bb7](https://github.com/Agoric/agoric-sdk/commit/1ea7bb77a3795a9ebadbe80f27a8e4cece3b3c9e))
* add stats dumping capability to swingset runner and kernel dumper ([83efadc](https://github.com/Agoric/agoric-sdk/commit/83efadc6325ea78097d00401888712f15ccf1dce))
* count number of times various stats variables are incremented and decremented ([129f02f](https://github.com/Agoric/agoric-sdk/commit/129f02fb3c5a44950fa0ab12a715fc2f18911c08))
* do not require accounts to exist before provisioning ([043dbcd](https://github.com/Agoric/agoric-sdk/commit/043dbcd745b799391f60be832cb1173ed9aea062))
* enable ag-chain-cosmos Node.js debugging ([5779d6e](https://github.com/Agoric/agoric-sdk/commit/5779d6ecc507b9b01ce779d8db6efc0e2c9dd453))
* inbound network connection metadata negotiation ([a7ecd9d](https://github.com/Agoric/agoric-sdk/commit/a7ecd9d9a60ba2769b6865fb6c195b569245a260))
* set the parameters for starting with an exported genesis ([9b62335](https://github.com/Agoric/agoric-sdk/commit/9b623352b9740929f0ce6bf41d0f4a6684c0538e))
* support value return from `bootstrap` and other exogenous messages ([a432606](https://github.com/Agoric/agoric-sdk/commit/a43260608412025991bcad3a48b20a486c3dbe15))
* **cosmic-swingset:** add board, use board in mailboxAdmin ([#1167](https://github.com/Agoric/agoric-sdk/issues/1167)) ([1381ba6](https://github.com/Agoric/agoric-sdk/commit/1381ba6e1c65a9eb927fb097a058b56e23839b83))
* **install-ses:** new package ([7fa8f2c](https://github.com/Agoric/agoric-sdk/commit/7fa8f2c95914578e703efb56b52b1c5686f6c06b))
* **transform-metering:** add balance-getters to refillFacet ([8200188](https://github.com/Agoric/agoric-sdk/commit/82001883bd8313075882eedb5e33789c5871241e))
* further along the path of state export and migration ([13dc588](https://github.com/Agoric/agoric-sdk/commit/13dc588ee3502df243e5e8038406b737df21ccd8))
* implement `agoric cosmos ...` ([0587c6a](https://github.com/Agoric/agoric-sdk/commit/0587c6aec539cd6c7adb9fab4b3edddadf56c870))
* just enough mechanism to support the provisioning transaction ([889a5db](https://github.com/Agoric/agoric-sdk/commit/889a5db37e61b1d654676abc248db58cf1266425))
* kernel promise reference counting ([ba1ebc7](https://github.com/Agoric/agoric-sdk/commit/ba1ebc7b2561c6a4c856b16d4a24ba38a40d0d74))
* outbound connection metadata negotiation ([5dd2e63](https://github.com/Agoric/agoric-sdk/commit/5dd2e63b8c1fac9543bbb9f9e2f5d8e932efc34a))
* pass blockHeight and blockTime from all IBC events ([79bd316](https://github.com/Agoric/agoric-sdk/commit/79bd3160a3af232b183bcefb8b229fdbf6192c49))
* pass local and remote address to onOpen callback ([2297a08](https://github.com/Agoric/agoric-sdk/commit/2297a089a0fc576a4d958427292b2f174215ad3f))
* Zoe simpleExchange perf test in swingset-runner ([79da155](https://github.com/Agoric/agoric-sdk/commit/79da15578750485b25a64626248078aee844c42e))


### Performance Improvements

* Don't use the useWritemap option if we know we don't need it ([c272e43](https://github.com/Agoric/agoric-sdk/commit/c272e43f270cb9df47619cc95fed938520aec344))





# [2.5.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.4.0...@agoric/sdk@2.5.0) (2020-05-17)


### Bug Fixes

* bump dependency on newer cosmos-sdk ([d114c5e](https://github.com/Agoric/agoric-sdk/commit/d114c5e53be4056df89fd7a15bbd80b3a51fe4c1))
* don't bypass the block queue when running simulateBlock ([444067d](https://github.com/Agoric/agoric-sdk/commit/444067d24f2aee15eece92a0b1a4888b9fb9e419))
* don't stall extra turns while resolving to local objects ([04740d6](https://github.com/Agoric/agoric-sdk/commit/04740d6e1c2279f8ae1ab17ecc83bd6f772034a7))
* fix double invoke bug ([#1117](https://github.com/Agoric/agoric-sdk/issues/1117)) ([b8d462e](https://github.com/Agoric/agoric-sdk/commit/b8d462e56aa3f1080eb7617dd715a3ecbd2c9ae3))
* fix typedef for makeInstance (was erroring incorrectly) and give better error message for an invalid installationHandle ([#1109](https://github.com/Agoric/agoric-sdk/issues/1109)) ([4b352fc](https://github.com/Agoric/agoric-sdk/commit/4b352fc7f399a479d82181158d4d61e63790b31f))
* fix Zoe bug in which offer safety can be violated ([#1115](https://github.com/Agoric/agoric-sdk/issues/1115)) ([39d6ae2](https://github.com/Agoric/agoric-sdk/commit/39d6ae26dd1aaec737ae0f9a47af5c396868c188)), closes [#1076](https://github.com/Agoric/agoric-sdk/issues/1076)
* **transform-eventual-send:** split out rewriter.js to fix cycle ([8a54d36](https://github.com/Agoric/agoric-sdk/commit/8a54d36f6de8cee2ea87d6c75ea1eb013f40e766))
* make output from bundleSource correspond to source map lines ([c1ddd4a](https://github.com/Agoric/agoric-sdk/commit/c1ddd4a0a27de9561b3bd827213562d9741e61a8))
* remove many build steps ([6c7d3bb](https://github.com/Agoric/agoric-sdk/commit/6c7d3bb0c70277c22f8eda40525d7240141a5434))
* temporary fix to support displaying NFT extents which are arrays of objects ([#1094](https://github.com/Agoric/agoric-sdk/issues/1094)) ([07e554b](https://github.com/Agoric/agoric-sdk/commit/07e554b9eccf930ba850868b9ad604a1539d1c8f))


### Features

* marshal based on user's petnames ([#1092](https://github.com/Agoric/agoric-sdk/issues/1092)) ([5e1945c](https://github.com/Agoric/agoric-sdk/commit/5e1945c99d405c2dbf1a6c980591c09d8a952e8a))
* **transform-eventual-send:** expose bare transform function too ([0bb35eb](https://github.com/Agoric/agoric-sdk/commit/0bb35eb11fd9acc4e90ec987f83f246e09cdcab5))
* provide scaffolding for testing scenario3's home objects ([84752e2](https://github.com/Agoric/agoric-sdk/commit/84752e230f22d8cc254413e3827a24140318dfcb))





# [2.4.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.3.0...@agoric/sdk@2.4.0) (2020-05-10)


### Bug Fixes

* always send non-empty acknowledgements ([5e22a4a](https://github.com/Agoric/agoric-sdk/commit/5e22a4a78db9004351f53d6cb5bfdd29f9ee25b6))
* be lazy in choosing which handler to use ([904b610](https://github.com/Agoric/agoric-sdk/commit/904b610685a50ba32dc0712e62f4c902f61e437a))
* be sure to propagate handler failures ([2b931fc](https://github.com/Agoric/agoric-sdk/commit/2b931fcb60afcb24fd7c331eadd12dbfc4592e85))
* bigdipper settings changes ([facb79d](https://github.com/Agoric/agoric-sdk/commit/facb79d89a470371c67e89cb08656ed5cfdc5348))
* fail hard if there is no $BOOT_ADDRESS ([eeb2592](https://github.com/Agoric/agoric-sdk/commit/eeb25920557974bccc05978ab81966e8cc2a460e))
* filter proposal give and want by sparseKeywords in zcf.reallocate ([#1076](https://github.com/Agoric/agoric-sdk/issues/1076)) ([fb36a40](https://github.com/Agoric/agoric-sdk/commit/fb36a406e628765376797ab3663272402d3584b3))
* fix typo in idToComplete ([#1050](https://github.com/Agoric/agoric-sdk/issues/1050)) ([605e00e](https://github.com/Agoric/agoric-sdk/commit/605e00efd089218d6e2b9bacca352c0e933a8bd8))
* full traversal of sendPacket from end-to-end ([5c76981](https://github.com/Agoric/agoric-sdk/commit/5c76981aa02bf1cd1dcec174bff4a7f95638d500))
* index_all_keys for IBC ([f513bda](https://github.com/Agoric/agoric-sdk/commit/f513bdabd413b36a8bcab28b598eed4fef7da561))
* rewrite liveslots use of HandledPromise, remove deliver() stall ([42c2193](https://github.com/Agoric/agoric-sdk/commit/42c2193ce62f527eb2dfa1b5bed4f8b32f2d452d))


### Features

* ag-nchainz start-relayer now starts a single-channel relay ([6946dfb](https://github.com/Agoric/agoric-sdk/commit/6946dfbcae3023675ecffcc22fca2d866a745134))
* Optionally suppress wallet ([ceae9e6](https://github.com/Agoric/agoric-sdk/commit/ceae9e65cf4ece932d1f565c74afeec06c9074cb))





# [2.3.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.2.0...@agoric/sdk@2.3.0) (2020-05-04)


### Bug Fixes

* crisper rejection of closed and revoked ports/connections ([589702b](https://github.com/Agoric/agoric-sdk/commit/589702bb049eed808029546fd0f0eb0b1a19864b))
* decrease the need for sendPacket delay (almost fixed) ([9f65899](https://github.com/Agoric/agoric-sdk/commit/9f658991eb38009ada8d1a6127ad1d6f323d326e))
* fix "delegates" conditional syntax ([0a774a5](https://github.com/Agoric/agoric-sdk/commit/0a774a57be0697a8351f1a8523710f04e5368e82))
* ibcports->ibcport ([efb9d95](https://github.com/Agoric/agoric-sdk/commit/efb9d95c8fc5b69e76e9dc52236ebea2f98ee50c))
* introduce sleep to help mitigate a relayer race condition ([c0014d3](https://github.com/Agoric/agoric-sdk/commit/c0014d3108f28c01d507da1c7553295a3fde6b06))
* lots and lots of improvements ([8f1c312](https://github.com/Agoric/agoric-sdk/commit/8f1c3128bbb4c3baf7f15b9ca632fc902acd238f))
* minor cleanups ([8b63024](https://github.com/Agoric/agoric-sdk/commit/8b63024a0c749c3c61c3daee3695f4546d8079ff))
* missed a change in refactoring ([567f713](https://github.com/Agoric/agoric-sdk/commit/567f71318d5c3bdbf7a6ed620610790dd7cd3c22))
* more dIBC inbound work ([6653937](https://github.com/Agoric/agoric-sdk/commit/665393779540c580d57f798aa01c62855e7b5278))
* propagate flushChainSend argument from fake-chain to launch ([69ee801](https://github.com/Agoric/agoric-sdk/commit/69ee8019eeda3f6ede4737d90e2abbbff8d5203a))
* propagate Go errors all the way to the caller ([ea5ba38](https://github.com/Agoric/agoric-sdk/commit/ea5ba381e4e510bb9c9053bfb681e778f782a801))
* proper inbound IBC listening ([3988235](https://github.com/Agoric/agoric-sdk/commit/3988235312806711c1837f80788ddc42ae7713dd))
* reject all sends when the connection is closed ([61b0975](https://github.com/Agoric/agoric-sdk/commit/61b09750c6c89f0097addd9ee068751bc4a55e56))
* remove hack to delay packets with a timer; the relayer wins! ([a16a444](https://github.com/Agoric/agoric-sdk/commit/a16a444fd1f801b578cc0251da882898b1071355))
* upgrade Cosmos SDK to fix x/capability nondeterminism ([1870d5e](https://github.com/Agoric/agoric-sdk/commit/1870d5e95966aaa63c6a0078848a8af255373d5f))
* use the downcall's partial Packet as arguments where possible ([3befb25](https://github.com/Agoric/agoric-sdk/commit/3befb25363fb7f7867e67d6d5ce2c1f807a3c9a7))


### Features

* end-to-end dIBC across chains ([151ff3f](https://github.com/Agoric/agoric-sdk/commit/151ff3f9e0c92972aa7a21a6f55c1898db85b820))
* implement `console` endowment for the REPL ([4aaf56d](https://github.com/Agoric/agoric-sdk/commit/4aaf56d883faf661d54862bd46357a8b89ad668f))
* suspend an outbound connection until the relayer picks it up ([ee22926](https://github.com/Agoric/agoric-sdk/commit/ee22926e52c3b4d17df7fa760e017d02f03f1a8f))





# [2.1.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.1.0-alpha.0...@agoric/sdk@2.1.0) (2020-04-13)

**Note:** Version bump only for package @agoric/sdk





# [2.1.0-alpha.0](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.0.1...@agoric/sdk@2.1.0-alpha.0) (2020-04-12)


### Bug Fixes

* better detection of already-listening ports ([6194c31](https://github.com/Agoric/agoric-sdk/commit/6194c31a9c7405f017666ac6de29b054b3e87c9d))
* change the account prefix to "agoric" and app name to Agoric ([0c14de9](https://github.com/Agoric/agoric-sdk/commit/0c14de900c008afb8a09eeeddaff6547be7096d2))
* cosmic-swingset should use disk-backed storage ([da0613a](https://github.com/Agoric/agoric-sdk/commit/da0613a58fa9711d64584ee1cd7886309cff52fd)), closes [#899](https://github.com/Agoric/agoric-sdk/issues/899)
* increase level of contract console.log to console.info ([00156f2](https://github.com/Agoric/agoric-sdk/commit/00156f235abb1b87db1c5ab0bd5155c2f3615382))
* liveslots use the returned promise rather than our own ([3135d9a](https://github.com/Agoric/agoric-sdk/commit/3135d9a14c0b9e773419c6882ad00fb285b27303))
* reinstate carrying forward public keys ([504a8ce](https://github.com/Agoric/agoric-sdk/commit/504a8ce6a004d08c9436ed88a39e3c63ecb5202b))
* revive the ability of a zoe client to get access to the code. ([1ad9265](https://github.com/Agoric/agoric-sdk/commit/1ad926519cc6ca14aadc2a328d89f0d400a8bc95)), closes [#877](https://github.com/Agoric/agoric-sdk/issues/877)
* rewrite HTML comments and import expressions for SES's sake ([1a970f6](https://github.com/Agoric/agoric-sdk/commit/1a970f65b67e047711e53949a286f1587b9a2e75))
* shorten HandledPromises to propagate handlers ([2ed50d2](https://github.com/Agoric/agoric-sdk/commit/2ed50d24c1b80959748bcaf0d04f1c4cd25f4242))
* shut up eslint ([fcc1ff3](https://github.com/Agoric/agoric-sdk/commit/fcc1ff33ffc26dde787c36413e094365e1d09c03))
* tweak log levels ([b0b1649](https://github.com/Agoric/agoric-sdk/commit/b0b1649423f7b950904604ba997ddb25e413fe08))
* **zoe:** ensure offers have the same instance handle as the contract calling the contract facet method ([#910](https://github.com/Agoric/agoric-sdk/issues/910)) ([0ffe65f](https://github.com/Agoric/agoric-sdk/commit/0ffe65faa5baccb114d0d91540cd9578606d7646))
* update checkIfProposal and rejectIfNotProposal ([7cdf09d](https://github.com/Agoric/agoric-sdk/commit/7cdf09dec9740a167c4c1d5770e82774961a5ae0))
* **zoe:** improve assertSubset error message ([#873](https://github.com/Agoric/agoric-sdk/issues/873)) ([4c6f11f](https://github.com/Agoric/agoric-sdk/commit/4c6f11f1931342fd09b3170183e3df77bed0d678))


### Features

* add the returnedP as the last argument to the handler ([1f83d99](https://github.com/Agoric/agoric-sdk/commit/1f83d994f48b659f3c49c4b5eb2b50ea7bb7b7a3))
* allow sparse keywords ([#812](https://github.com/Agoric/agoric-sdk/issues/812)) ([dcc9ba3](https://github.com/Agoric/agoric-sdk/commit/dcc9ba3413d096c78df9f8b184991c3bfd83ace3)), closes [#391](https://github.com/Agoric/agoric-sdk/issues/391)
* Be smarter about where database files are located. ([2eb1469](https://github.com/Agoric/agoric-sdk/commit/2eb14694a108899f1bafb725e3e0b4a34150a07f))
* Check that makeInstance() returns an actual invite ([546d2ef](https://github.com/Agoric/agoric-sdk/commit/546d2ef69ca8e2c2c3ad17c0b78083b281cb3a9a)), closes [#820](https://github.com/Agoric/agoric-sdk/issues/820)
* introduce a wrapper around ag-solo to start in inspect mode ([93e4887](https://github.com/Agoric/agoric-sdk/commit/93e488790da490d997c7d707b1340fc7be5b33b7))
* new tool -- kernel state dump utility ([f55110e](https://github.com/Agoric/agoric-sdk/commit/f55110e0e4f5963faf1ff86895cd3d0120bb7eca))
* retry the CapTP Websocket if it failed ([be4bd4e](https://github.com/Agoric/agoric-sdk/commit/be4bd4e39b0e86279cd2e92380b6ee19270abd5e))
* use SETUP_HOME/cosmos-delegates.txt and increase defaults ([5e87ae1](https://github.com/Agoric/agoric-sdk/commit/5e87ae1c501adf5b35371c30dc999bfcea8c75e6))





## [2.0.1](https://github.com/Agoric/agoric-sdk/compare/@agoric/sdk@2.0.0...@agoric/sdk@2.0.1) (2020-04-03)


### Bug Fixes

* make provisioning server work again ([c7cf3b3](https://github.com/Agoric/agoric-sdk/commit/c7cf3b3e0d5e0966ce87639ca1aa36546f365e38))





# 2.0.0 (2020-04-02)


### Bug Fixes

* add `single-node` subcommand on the Docker entrypoint ([210edb6](https://github.com/Agoric/agoric-sdk/commit/210edb683280791b0e74831860c7e93176dadbed))
* convert some tests from try/catch/finally to t.plan() ([df8e686](https://github.com/Agoric/agoric-sdk/commit/df8e686bb2ea3a95e67cff930b9bfe46850f017d))
* have a generic IBCChannelHandler that takes ChannelTuples ([3bff564](https://github.com/Agoric/agoric-sdk/commit/3bff564a4ffa6f43e4496871b628ea1bfaa4c568))
* make agoric start work without SDK ([8e5b6d6](https://github.com/Agoric/agoric-sdk/commit/8e5b6d6578dfb4cf059fd6f52d1a3c983dd178ba))
* make unhandledRejections log louder ([313adf0](https://github.com/Agoric/agoric-sdk/commit/313adf0b30ef2e6069573e1bb683bbb01411b175))
* prevent deadlock in the input queue for delivered commands ([ee0e488](https://github.com/Agoric/agoric-sdk/commit/ee0e4881dc2dd17fea8b4efea6e149bd86daab22))
* properly install outside of SDK ([1087400](https://github.com/Agoric/agoric-sdk/commit/10874009cf849e408dc986d02d2c4831f6712a1a))
* properly use EncodedLen ([0633825](https://github.com/Agoric/agoric-sdk/commit/063382581ba472ec5adb0eb5760f501148158010))
* revert Zoe change ([#775](https://github.com/Agoric/agoric-sdk/issues/775)) ([9212818](https://github.com/Agoric/agoric-sdk/commit/9212818d71e0906a7be343eda6acd37e634008be))
* run "yarn install" in the ui directory ([62bfe8d](https://github.com/Agoric/agoric-sdk/commit/62bfe8d4e634b35d7f830f6aef1b3f3a7134cc06))
* stringify queued objects when sending over WebSocket ([6c45374](https://github.com/Agoric/agoric-sdk/commit/6c453742c773f79dc956a56515a3701152341bc7))
* use commander for better help output ([d9e8349](https://github.com/Agoric/agoric-sdk/commit/d9e83493a4a6a1e2312bc3c300d83f604c70b755))
* use the PacketI interface where possible ([48c3bf5](https://github.com/Agoric/agoric-sdk/commit/48c3bf5e80b6fd8d4fec3e73a4a2225eb1ca5ae8))
* wait for payments at opportune moments ([53f359d](https://github.com/Agoric/agoric-sdk/commit/53f359d56c49ef62a90e1e834b359de8ca5dfa4f))


### Features

* add E.when(x, onfulfilled, onrejected) as a convenience ([4415f67](https://github.com/Agoric/agoric-sdk/commit/4415f67651f7770fddea85272ee7a02b69b9e8aa))
* allow optional arguments to redeem ([e930944](https://github.com/Agoric/agoric-sdk/commit/e930944390cc85ce287a87c25005e76891fa92d1))
* collapse the dapp-template history ([1cb5798](https://github.com/Agoric/agoric-sdk/commit/1cb57989f64aa36a0859f81f5f8927cb928baff2))
* implement the Go side of dynamic IBC ([cf2d894](https://github.com/Agoric/agoric-sdk/commit/cf2d8945eecd8871898c127e9748ea7c5247628e))
* just ack IBC packets and close ([88257f8](https://github.com/Agoric/agoric-sdk/commit/88257f80574e3651cf88b50a2d513139dc7d497f))
* use Agoric version of cosmos-sdk for dynamic IBC ([b004f11](https://github.com/Agoric/agoric-sdk/commit/b004f11f7c50d508c6de9f51ad28a1b1fc266ae0))



## 0.4.2 (2020-03-25)


### Bug Fixes

* accomodate modified offer ids ([38d367d](https://github.com/Agoric/agoric-sdk/commit/38d367dedcba143524b4668573f11b757233401b))
* actually synchronise the inbound messages ([9568483](https://github.com/Agoric/agoric-sdk/commit/95684834643321dcceb70675f450efe42464df7c))
* add missing files and dependencies ([2dc3e07](https://github.com/Agoric/agoric-sdk/commit/2dc3e072103aa68517c0ca31b15e1bf6d4bfc239))
* allow disabling of logging by setting DEBUG='' ([131c1c6](https://github.com/Agoric/agoric-sdk/commit/131c1c64f646f2fa3adece698d1da240dc969f03))
* allow vats under SwingSet to unwrap their promises ([f2be5c7](https://github.com/Agoric/agoric-sdk/commit/f2be5c7806de93388e2641962539218313489fad))
* freshen the simple exchange dApp ([82f634f](https://github.com/Agoric/agoric-sdk/commit/82f634ff76fe1dd6a253a61a11b06dea71dd1c15)), closes [#646](https://github.com/Agoric/agoric-sdk/issues/646)
* getOfferDescriptions is now working ([b50690b](https://github.com/Agoric/agoric-sdk/commit/b50690be3294baff6165cb3a10b644f31bb29e15))
* hydrateHooks on the HTTP handler instead of addOffer ([b3e214d](https://github.com/Agoric/agoric-sdk/commit/b3e214d66a9e753da992d1e320350321c78e747a))
* improve command device support ([c70b8a1](https://github.com/Agoric/agoric-sdk/commit/c70b8a10b04c5554b1a952daa584216227858bc5))
* input queuing, and use the block manager for fake-chain ([c1282c9](https://github.com/Agoric/agoric-sdk/commit/c1282c9e644fbea742846f96a80a06afe64664ba))
* introduce and use Store.entries() ([b572d51](https://github.com/Agoric/agoric-sdk/commit/b572d51df45641da59bc013a0f2e45a694e56cbc))
* let the caller handle dispatch rejections ([8a9761d](https://github.com/Agoric/agoric-sdk/commit/8a9761dcb49787a03bc302a1138a4e86a80ee360))
* make default log level for ag-chain-cosmos more compatible ([258e4c9](https://github.com/Agoric/agoric-sdk/commit/258e4c94746888f0392da19335cf7abc804c3b3a))
* make REPL occupy less of screen when below wallet ([d4fc392](https://github.com/Agoric/agoric-sdk/commit/d4fc392f49bd515a70e2cc904f2fca08b0931584))
* make the changes needed to cancel pending offers ([b4caa9e](https://github.com/Agoric/agoric-sdk/commit/b4caa9ed26489ad39651b4717d09bd9f84557480))
* make the fake-chain better ([b4e5b02](https://github.com/Agoric/agoric-sdk/commit/b4e5b02ca8fc5b6df925391f3b0a2d6faecbdb73))
* prevent simulated blocks from reentering the kernel ([42f7abd](https://github.com/Agoric/agoric-sdk/commit/42f7abd4ec9a017bbca6d02c164c06272e328713)), closes [#763](https://github.com/Agoric/agoric-sdk/issues/763)
* propagate makeContract exceptions ([9a3cc18](https://github.com/Agoric/agoric-sdk/commit/9a3cc187b7ee75c446610cc3a101dfd0f557ea66))
* propagate more errors correctly ([0437c5f](https://github.com/Agoric/agoric-sdk/commit/0437c5f1510c05d49a4b5070919db77efefdbb09))
* proper sorting of wallet entries ([24627eb](https://github.com/Agoric/agoric-sdk/commit/24627eb5c271d75052370afa24ead851d001a126))
* properly kill off child processes on SIGHUP ([93b71cd](https://github.com/Agoric/agoric-sdk/commit/93b71cd6b894cbd37dab39b6946ed8e6d47ab2a6))
* reenable package.json substitutions ([10bece7](https://github.com/Agoric/agoric-sdk/commit/10bece74cdb9608f069d7f2b4c3534368ce2ea5d))
* regression in `agoric start --reset` ([206ecd0](https://github.com/Agoric/agoric-sdk/commit/206ecd088f1bc2bb33c15c3f8c134fe2d8b4f39e))
* reinstate console endowment needed for Zoe contract debugging ([851d1ec](https://github.com/Agoric/agoric-sdk/commit/851d1ec78bba30c70571f400c8525c654338c641))
* remove extra interleaved spaces from assert console.error ([c6af2e4](https://github.com/Agoric/agoric-sdk/commit/c6af2e4abfc28959f70518d7905076270cffcb34))
* remove nondeterminism from ag-solo replay ([2855b34](https://github.com/Agoric/agoric-sdk/commit/2855b34158b71e7ffe0acd7680d2b3c218a5f0ca))
* remove reference to ping ([a9a3f0f](https://github.com/Agoric/agoric-sdk/commit/a9a3f0fd68d9870333fd25c458d8eba151557c65))
* rename connection to channel ([f50a94b](https://github.com/Agoric/agoric-sdk/commit/f50a94b33029e7ebd67db9a1c812f1d2dc955aa9))
* revert usage of SIGHUP to SIGINT ([2948400](https://github.com/Agoric/agoric-sdk/commit/294840026ef81bd19407c91bb92b68e4b5e13198))
* secure the console and nestedEvaluate endowments ([ed13e80](https://github.com/Agoric/agoric-sdk/commit/ed13e8008628ee95cb1a5ee5cc5b8e9dd4640a32))
* ses-adapter/package.json: fix files ([3b77dff](https://github.com/Agoric/agoric-sdk/commit/3b77dff8ab8796b0487b9f99338fc202e039c016))
* silence the builtin modules warning in agoric-cli deploy ([9043516](https://github.com/Agoric/agoric-sdk/commit/904351655f8acedd5720e5f0cc3ace83b5cf6192))
* we now send 50agstake to each of the validators ([9a78552](https://github.com/Agoric/agoric-sdk/commit/9a78552606db91b7f678464b27261a391844916d))
* **swingset:** controller: enforce withSES==true ([e4d9b04](https://github.com/Agoric/agoric-sdk/commit/e4d9b04847bc5cc913f67fa308ff223779a10286))
* **swingset:** disable all non-SES tests ([b481008](https://github.com/Agoric/agoric-sdk/commit/b48100890d881e2678d4842993c6dcc067043eba))
* add END_BLOCK controller call ([b115b55](https://github.com/Agoric/agoric-sdk/commit/b115b559ef7636c7b4ed3f3878d347a2216a4947))
* add issuerRegKey to the purse output ([f7d90fa](https://github.com/Agoric/agoric-sdk/commit/f7d90fa884d74a1535d9f89dd839729a22170d16))
* anachrophobia should crash hard ([42deaaf](https://github.com/Agoric/agoric-sdk/commit/42deaafc7082d42f5114134744e5fdd01cc93ad7)), closes [#68](https://github.com/Agoric/agoric-sdk/issues/68)
* backport scripts/link-cli.js ([2974075](https://github.com/Agoric/agoric-sdk/commit/297407527f0750d238b68cc7f0066c0e0b93a6ba)), closes [#661](https://github.com/Agoric/agoric-sdk/issues/661)
* display in terms of issuers, not assays ([8a2a692](https://github.com/Agoric/agoric-sdk/commit/8a2a692b8758bed82074ed86988dd0deedce0c8a))
* don't double-withdraw from the first purse of an assay ([b37203e](https://github.com/Agoric/agoric-sdk/commit/b37203eded655169853bb1a3c7acdcdc8634ef15))
* first draft use collection equality ([6acbde7](https://github.com/Agoric/agoric-sdk/commit/6acbde71ec82101ec8da9eaafc729bab1fdd6df9))
* fix discrepencies revealed by the agoric-cli test ([422b019](https://github.com/Agoric/agoric-sdk/commit/422b01946481f549e15c8d36270146e5729855f7))
* generalise the wallet to arbitrary offers ([4b3ae29](https://github.com/Agoric/agoric-sdk/commit/4b3ae2974b2060e022fbe200b82e986d09cbc09a))
* make code clearer ([efc6b4a](https://github.com/Agoric/agoric-sdk/commit/efc6b4a369cc23813788f5626c61ec412e4e3f6a))
* panic on END_BLOCK error ([28b6d46](https://github.com/Agoric/agoric-sdk/commit/28b6d467ba3a40e752f75467c2381d1afa69a77e))
* polish the wallet and dApp UIs ([292291f](https://github.com/Agoric/agoric-sdk/commit/292291f234646cdb0685dbf63cf0a75a2491018c))
* remove 'Nat' from the set that SwingSet provides to kernel/vat code ([b4798d9](https://github.com/Agoric/agoric-sdk/commit/b4798d9e323c4cc16beca8c7f2547bce59334ae4))
* rename .agwallet and .agservers into _agstate ([a82d44f](https://github.com/Agoric/agoric-sdk/commit/a82d44fe370d32f8383e4558c7b03f3d13a2f163))
* run mkdir with recursive option to prevent exceptions ([a01fa04](https://github.com/Agoric/agoric-sdk/commit/a01fa04c2955e0f00f3bc29aa3862c2440a23c8e)), closes [#662](https://github.com/Agoric/agoric-sdk/issues/662)
* stringify an inboundHandler Error better ([6f80429](https://github.com/Agoric/agoric-sdk/commit/6f804291f7a348cef40899963b15a6274005a7f6))
* symbols no longer passable ([7290a90](https://github.com/Agoric/agoric-sdk/commit/7290a90444f70d2a9a2f5c1e2782d18bea00039d))
* unbreak the fake-chain ([d84ee30](https://github.com/Agoric/agoric-sdk/commit/d84ee30ad2991e0f1676627a23c3e6989d3b0728))
* use COMMIT_BLOCK action to sync state ([5a3c087](https://github.com/Agoric/agoric-sdk/commit/5a3c08705d8477fcc281134e8a3540079fcb1edd))
* **ag-cosmos-helper:** properly register /txs route ([17bae2d](https://github.com/Agoric/agoric-sdk/commit/17bae2d1546e14d1555b1e97b9359372ee124ba5))
* **ag-lcd:** tolerate cosmos/cosmos-sdk[#5592](https://github.com/Agoric/agoric-sdk/issues/5592) ([9eee270](https://github.com/Agoric/agoric-sdk/commit/9eee270beeeef415bad3a988c7ee890523f9d7e8))
* **ag-solo:** be more tolerant of missing wallet ([94c2a3e](https://github.com/Agoric/agoric-sdk/commit/94c2a3e38d618202c125f784814858bf06e4d191))
* **ag-solo:** don't require a git checkout to init ([b8c4474](https://github.com/Agoric/agoric-sdk/commit/b8c44748da0e0b9df468c518c8d37c0aa75013d6)), closes [#570](https://github.com/Agoric/agoric-sdk/issues/570) [#562](https://github.com/Agoric/agoric-sdk/issues/562)
* **ag-solo:** reenable the ag-solo bundle command ([6126774](https://github.com/Agoric/agoric-sdk/commit/6126774fd3f102cf575a430dfddb3a0c6adcf0f5)), closes [#606](https://github.com/Agoric/agoric-sdk/issues/606)
* **ag-solo-xs:** use noflake to help mitigate CI flakes ([4ee9889](https://github.com/Agoric/agoric-sdk/commit/4ee988977aa3c2db386c8477c6cfb2565ac5ad2b)), closes [#471](https://github.com/Agoric/agoric-sdk/issues/471)
* **agoric-cli:** changes to make `agoric --sdk` basically work again ([#459](https://github.com/Agoric/agoric-sdk/issues/459)) ([1dc046a](https://github.com/Agoric/agoric-sdk/commit/1dc046a02d5e616d33f48954e307692b43008442))
* **agoric-cli:** install the SDK symlink if requested ([f7fd68f](https://github.com/Agoric/agoric-sdk/commit/f7fd68f8aa301a14a110f403c1970d0bd1c1a51f))
* **ansible:** remove state that needs regeneration ([110dcb8](https://github.com/Agoric/agoric-sdk/commit/110dcb8625eb9d4d918f02c69e92451bcc77296b))
* **bundle:** use the same HandledPromise ([e668d3c](https://github.com/Agoric/agoric-sdk/commit/e668d3c9106ef6c47c66319afb8d954094b128eb)), closes [#606](https://github.com/Agoric/agoric-sdk/issues/606)
* **bundle-source:** regain default 'getExport' ([f234d49](https://github.com/Agoric/agoric-sdk/commit/f234d49be14d50d13249d79f7302aa8e594e23d2))
* **chain:** properly commit state ([7703aa7](https://github.com/Agoric/agoric-sdk/commit/7703aa753769d89dc1b2c7a899cfcf37c2f3626f))
* **chain:** state is being stored correctly again ([fe0b33d](https://github.com/Agoric/agoric-sdk/commit/fe0b33d2d33b4989f63d1e7030de61b5e886e69f))
* **cli:** improve install, template, fake-chain ([0890171](https://github.com/Agoric/agoric-sdk/commit/08901713bd3db18b52ed1793efca21b459e3713e))
* **configurableGlobals:** use to wrap all builtins under SES ([53c4549](https://github.com/Agoric/agoric-sdk/commit/53c4549e3c9ba9de30a0fd2077c3f352339493e9))
* **deployment:** update deployment steps ([7527eb0](https://github.com/Agoric/agoric-sdk/commit/7527eb01a3fd5fd4eb4db6f7e9452ccacfe39a74))
* **end-to-end:** metering works for some malicious code ([905061c](https://github.com/Agoric/agoric-sdk/commit/905061cbb7d7bc1c3eda4e434cbc72812cb73d2c))
* **evaluator:** quiescence works ([15adc38](https://github.com/Agoric/agoric-sdk/commit/15adc38228fe14dfac4a52a647b47d3013818aec))
* **github:** disable pessimal cache temporarily ([4cae336](https://github.com/Agoric/agoric-sdk/commit/4cae3360d645a1ebe8dd707fa07e75b6a446e9c3))
* **github:** hash only minimal cache key files ([f79f976](https://github.com/Agoric/agoric-sdk/commit/f79f976ecb442d3967dad92cc59d664997fd50b6)), closes [actions/runner#319](https://github.com/actions/runner/issues/319)
* **github:** update build process ([d90c1c6](https://github.com/Agoric/agoric-sdk/commit/d90c1c6eac219ca8c2c06aab46be246994b668eb))
* **go:** use agoric-labs/tendermint subscription-keep-id ([10b2cd2](https://github.com/Agoric/agoric-sdk/commit/10b2cd26191b1d8982f44a68bbe4f480be3772de))
* **init:** handle symbolic links and ignored files properly ([2d6b876](https://github.com/Agoric/agoric-sdk/commit/2d6b87604d6a1bc97028a89f1f3b8c59a7f3a991))
* **lockdown:** Begin working toward lockdown-style SES API ([3e63758](https://github.com/Agoric/agoric-sdk/commit/3e63758fbd0e197cb012d96dbd7d25a2bdd162e3))
* **Makefile:** better convention for installing ag-chain-cosmos ([b27426a](https://github.com/Agoric/agoric-sdk/commit/b27426a0b74e9c21482172b71cc30fc36ebf29f5))
* **Makefile:** install ag-chain-cosmos in $GOPATH/bin/ ([d4af74f](https://github.com/Agoric/agoric-sdk/commit/d4af74fbc090383f9e2bdcd564a72f3a6433e164))
* **Makefile:** set up the GOPATH environment ([ab72ca5](https://github.com/Agoric/agoric-sdk/commit/ab72ca562e0c5f2f6051a1c3eabebd0e680f3808))
* **makePromise:** support HandledPromise.unwrap(p) ([fb98636](https://github.com/Agoric/agoric-sdk/commit/fb98636864583e222f67087cbbe487bcfd74a772))
* **metering:** bump default combined meter for autoswap compatibility ([ac10627](https://github.com/Agoric/agoric-sdk/commit/ac10627a3524bdd6d2719026497fd37c8d00d25b))
* **metering:** get all tests working again ([f2a3206](https://github.com/Agoric/agoric-sdk/commit/f2a3206ad3c4ba98b225380a289bf49a12857a00))
* **metering:** more cleanups and documentation ([78ced24](https://github.com/Agoric/agoric-sdk/commit/78ced244d3028eadf4689bf44b7407f524ae509f))
* **metering:** properly reset for each crank ([ba191fe](https://github.com/Agoric/agoric-sdk/commit/ba191fe3435905e3d2ea5ab016571d1943d84bec))
* **metering:** properly transform try/catch/finally ([6fd28ae](https://github.com/Agoric/agoric-sdk/commit/6fd28ae7e56e052a9405de98d232a859de05653b))
* **metering:** refactor names and implementation ([f1410f9](https://github.com/Agoric/agoric-sdk/commit/f1410f91fbee61903e82a81368675eef4fa0b836))
* **provisioner:** allow for mount points as well ([7350220](https://github.com/Agoric/agoric-sdk/commit/7350220dfab2612ad7f3858988220cb307b92726))
* **provisioning-server:** remove debug prints ([f5b0e14](https://github.com/Agoric/agoric-sdk/commit/f5b0e14a96c77fd1bb40fbbf42e4f253b551d0a8))
* **pserver:** clarify StackedResource ([1251669](https://github.com/Agoric/agoric-sdk/commit/125166946d9eb985f6db2d797accbe37b6a90c22))
* **pserver:** new helper arguments and returns ([d40f2ac](https://github.com/Agoric/agoric-sdk/commit/d40f2ac452936ae8996f0e199c2b3f33ebc913c6))
* **solo:** get repl working again ([a42cfec](https://github.com/Agoric/agoric-sdk/commit/a42cfec9c8c087c77ec6e09d5a24edfe0d215c02))
* **spawner:** fail-stop meter exhaustion ([e390c35](https://github.com/Agoric/agoric-sdk/commit/e390c35c67aba674c22e03ede30e01c4da46ad3b))
* **spawner:** get tests to pass by fighting the esm package ([6993c1b](https://github.com/Agoric/agoric-sdk/commit/6993c1b9dc06d63d24c7a30656368131cff631a1))
* **spawner:** move makeCollect into a separate file ([31c2e28](https://github.com/Agoric/agoric-sdk/commit/31c2e2813ee4c6ff910b482c2d262241e5f941fc))
* **start:** parse `--pull` properly ([a5ac2c9](https://github.com/Agoric/agoric-sdk/commit/a5ac2c956c47e94ef79be53b683d48e8146a7b05))
* **SwingSet:** ensure the registerEndOfCrank doesn't allow sandbox escape ([053c56e](https://github.com/Agoric/agoric-sdk/commit/053c56e19e5a4ff4eba5a1b7550ccac7e6dab5d7))
* **SwingSet:** remove Nat from nested evaluation contexts too ([69088d1](https://github.com/Agoric/agoric-sdk/commit/69088d1c225a8234b2f39a0490309615b5d0a047))
* use latest @agoric/tendermint ([346b582](https://github.com/Agoric/agoric-sdk/commit/346b58291360b586e02278b14a7860715f0a06e8))
* **SwingSet:** remove redundant ${e} ${e.message} ([9251375](https://github.com/Agoric/agoric-sdk/commit/92513753bb8ec8b3dd28318bb26c7c7a58df2ba7))
* **tame-metering:** get working under SES 1.0 ([8246884](https://github.com/Agoric/agoric-sdk/commit/82468844e4d5ac8a6b1ad46c1009cf0719e701ea))
* **tame-metering:** new implementation of isConstructor ([362456d](https://github.com/Agoric/agoric-sdk/commit/362456d9e6dc0eb0d139eb1c777c43a877db0cf9))
* **tame-metering:** remove .prototype via bind if necessary ([a77c7e3](https://github.com/Agoric/agoric-sdk/commit/a77c7e37e76c366ec5f6d039afc8e4872b533226))
* **test-make:** run the default Makefile target ([aa7d960](https://github.com/Agoric/agoric-sdk/commit/aa7d96039d6e0ca00d24a01756569e1780b375ea))
* **transform-metering:** only enable meters; the host has to disable ([d1b8e84](https://github.com/Agoric/agoric-sdk/commit/d1b8e84361b7ebebb363373dd730f10383e46ef8))
* rename ustake -> uagstake ([ac89559](https://github.com/Agoric/agoric-sdk/commit/ac895597e57a118948d686a0f60ebf8aed18d64e))
* try again with tape-xs ag03 ([ad24880](https://github.com/Agoric/agoric-sdk/commit/ad24880488a3114223fe8c6bfcfc8659bebc117e))
* wrap globals instead of using a Proxy ([35b2d5c](https://github.com/Agoric/agoric-sdk/commit/35b2d5cb8bcab2c86a3093def400057adee73b59))
* **ag-chain-cosmos:** keep SwingSet state in the validator state dir ([#434](https://github.com/Agoric/agoric-sdk/issues/434)) ([00b874c](https://github.com/Agoric/agoric-sdk/commit/00b874c59ef29db49bec4e89e1ed9122e0a171f7)), closes [#433](https://github.com/Agoric/agoric-sdk/issues/433)
* **ansible:** double the stakes ([21fe284](https://github.com/Agoric/agoric-sdk/commit/21fe284d05094b0ac932ae39f30878e7f97c2df3))
* **api:** remove many unnecessary methods ([cf10dc3](https://github.com/Agoric/agoric-sdk/commit/cf10dc3af79cbeb33a3bc4980e6b87ac28503cd4)), closes [#41](https://github.com/Agoric/agoric-sdk/issues/41)
* **bundle:** deprecate the experimental E.C() syntax ([07f46cc](https://github.com/Agoric/agoric-sdk/commit/07f46cc47f726414410126400a7d34141230c967))
* **bundle-source:** remove `"type": "module"` from package.json ([326b00a](https://github.com/Agoric/agoric-sdk/commit/326b00af1f01383df0b3cdf3dbb9f1c6d2273002)), closes [#219](https://github.com/Agoric/agoric-sdk/issues/219)
* **captp:** use new @agoric/eventual-send interface ([d1201a1](https://github.com/Agoric/agoric-sdk/commit/d1201a1a1de324ae5e21736057f3bb03f97d2bc7))
* **cosmic-swingset:** minor UI versioning tweaks ([e0a5985](https://github.com/Agoric/agoric-sdk/commit/e0a59858ce606c31a756a0b029b57b478cfe84a0))
* **cosmic-swingset:** reduce unnecessary logs ([#425](https://github.com/Agoric/agoric-sdk/issues/425)) ([8dc31a0](https://github.com/Agoric/agoric-sdk/commit/8dc31a0d3620372523887adc7ea7c28ef4bf195d)), closes [#424](https://github.com/Agoric/agoric-sdk/issues/424)
* **cosmic-swingset:** reenable setup scripts ([e533479](https://github.com/Agoric/agoric-sdk/commit/e5334791202a89028d31ddf8ea109fe469a84943)), closes [#311](https://github.com/Agoric/agoric-sdk/issues/311)
* **deployment:** properly use agoric-sdk tag ([75dd0c3](https://github.com/Agoric/agoric-sdk/commit/75dd0c328a8aba9543d10af37408f2b4608faddc))
* **deployment:** track deployment version ([ad63fee](https://github.com/Agoric/agoric-sdk/commit/ad63fee58a55ca281a6f3b0a20392d81680ffa64))
* **deployment:** update Dockerfile for Makefile ([f5607af](https://github.com/Agoric/agoric-sdk/commit/f5607afd15742a6b5c2f064c616a2ce8bd0e6130))
* **docker:** cache Go depedency downloads to optimise docker builds ([aba22f0](https://github.com/Agoric/agoric-sdk/commit/aba22f0639ab9d92c02b5a87e30994d353762998))
* **docker:** more updates for ag-setup-solo ([e4b7c86](https://github.com/Agoric/agoric-sdk/commit/e4b7c868858329928c7fb25f4cac881d81458a99))
* **docker:** propagate git-revision correctly ([d8e6f7e](https://github.com/Agoric/agoric-sdk/commit/d8e6f7eca73a9fe6ba5ce4f9a01d38cd768c89d1))
* **docker:** remove dependency on NPM ([d3a8050](https://github.com/Agoric/agoric-sdk/commit/d3a805029da851985ae59836f76f6a4dd794488b))
* **E:** address PR comments ([a529982](https://github.com/Agoric/agoric-sdk/commit/a529982203e4842290b84f48831052fe1e6d30f9))
* **eventual-send:** Update the API throughout agoric-sdk ([97fc1e7](https://github.com/Agoric/agoric-sdk/commit/97fc1e748d8e3955b29baf0e04bfa788d56dad9f))
* **fluentd:** tweak the Loki records ([cf62725](https://github.com/Agoric/agoric-sdk/commit/cf627258476bbee4a297082048f6f5784e2e04fc))
* **fluentd:** update cache before running apt ([6d44e70](https://github.com/Agoric/agoric-sdk/commit/6d44e70bba2f52f62b6507b98548d26aa43443d8))
* **fluentd:** update Loki store format ([a834015](https://github.com/Agoric/agoric-sdk/commit/a834015d1e4f450ddc4a69f852005da425f70fca))
* **HandledPromise:** implement specified API ([8da7249](https://github.com/Agoric/agoric-sdk/commit/8da7249764da87b7c47b89b5ccb5c1f2125ef0d1)), closes [#42](https://github.com/Agoric/agoric-sdk/issues/42)
* **Makefile:** remove old docker-build and docker-push rules ([92a3816](https://github.com/Agoric/agoric-sdk/commit/92a3816968c17fc68830ff9cc433b02d23e70314))
* **package.json:** add packages/deployment to workspaces ([b847215](https://github.com/Agoric/agoric-sdk/commit/b8472152e275611eae480427d4c2682cb7fcdd0f))
* **pserver:** use with-blocks when possible ([#384](https://github.com/Agoric/agoric-sdk/issues/384)) ([43ac9ac](https://github.com/Agoric/agoric-sdk/commit/43ac9ac087c5c221eca624b4b63c395699e956e9))
* **resolve:** protect against reentrancy attack ([#401](https://github.com/Agoric/agoric-sdk/issues/401)) ([d1f25ef](https://github.com/Agoric/agoric-sdk/commit/d1f25ef2511168bd9df8b6ca6a8edfef13f6dd2b)), closes [#9](https://github.com/Agoric/agoric-sdk/issues/9)
* **security:** update serialize-javascript dependency ([#340](https://github.com/Agoric/agoric-sdk/issues/340)) ([970edd3](https://github.com/Agoric/agoric-sdk/commit/970edd31a8caa36235fad860b3b0ee8995042d7a))
* **start:** eliminate default fake delay, and add --delay option ([28ce729](https://github.com/Agoric/agoric-sdk/commit/28ce7298370ec81ae37dcc15db3b162974eea39a)), closes [#572](https://github.com/Agoric/agoric-sdk/issues/572)
* **SwingSet:** passing all tests ([341718b](https://github.com/Agoric/agoric-sdk/commit/341718be335e16b58aa5e648b51a731ea065c1d6))
* **testnet:** properly push agoric/cosmic-swingset-setup ([d82aad6](https://github.com/Agoric/agoric-sdk/commit/d82aad6fb2ce71826fd71e2404fc1f1722ec709e))
* **timer:** don't enforce advancement, just prevent moving backwards ([7a0a509](https://github.com/Agoric/agoric-sdk/commit/7a0a50916ee98b4aad1288b34e4b1cda9b456437)), closes [#328](https://github.com/Agoric/agoric-sdk/issues/328)
* **unwrap:** pass through non-Thenables before throwing ([67aba42](https://github.com/Agoric/agoric-sdk/commit/67aba42962b10af9250248f7f1b2abc579291de6)), closes [#518](https://github.com/Agoric/agoric-sdk/issues/518)
* **ustake:** stake is actually micro-stake ([1aaf14f](https://github.com/Agoric/agoric-sdk/commit/1aaf14f078d1defb09d52692e78dabb9854bbb27))
* address PR comments ([b9ed6b5](https://github.com/Agoric/agoric-sdk/commit/b9ed6b5a510433af968ba233d4e943b939defa1b))
* **zoe:** have install accept a moduleFormat argument ([#235](https://github.com/Agoric/agoric-sdk/issues/235)) ([8621eca](https://github.com/Agoric/agoric-sdk/commit/8621eca5d2b22e3f17935b42c3e5c9cfc54e2040))


### Features

* accomodate Zoe roles as is currently designed ([d4319d1](https://github.com/Agoric/agoric-sdk/commit/d4319d173d5ade915b3132f79054926f78121a51))
* add anylogger support ([4af822d](https://github.com/Agoric/agoric-sdk/commit/4af822d0433ac2b0d0fd53298e8dc9c7347a3e11))
* Add legends to the graphs produced by the stat-logger graphing utility ([65340d9](https://github.com/Agoric/agoric-sdk/commit/65340d9e123bd64db11aa11d88035f0fcf2de93f))
* Add option to force GC after every block, add 'help' command, clean up error reporting ([e639ee5](https://github.com/Agoric/agoric-sdk/commit/e639ee5d69ce27eef40a8f0c6c8726dd81f8de3d))
* Add PDF and stdout support to stat-logger graphing ([22238e7](https://github.com/Agoric/agoric-sdk/commit/22238e75eb3e0726a7385c783c8f7678c48884d8))
* add wallet offer publicID querying API to the bridge ([4010226](https://github.com/Agoric/agoric-sdk/commit/401022662fb8776dc671a46eb5b31dd20d0bf318))
* add wallet.ping() method for testing ([1f07cd2](https://github.com/Agoric/agoric-sdk/commit/1f07cd26d55503af4dc5dbd8d3b916b323033793))
* allow subscribing to wallet offer changes ([5ad56e6](https://github.com/Agoric/agoric-sdk/commit/5ad56e6985b221e65989f4d10b39154c57d8f13c))
* default to silent unles `DEBUG=agoric` ([2cf5cd8](https://github.com/Agoric/agoric-sdk/commit/2cf5cd8ec66d1ee38f351be8b2e3c808afd554a9))
* implement the Cosmos block manager ([3a5936a](https://github.com/Agoric/agoric-sdk/commit/3a5936aeae6fc32a6075d85b7af88885e689a2ab))
* implement wallet bridge separately from wallet user ([41c1278](https://github.com/Agoric/agoric-sdk/commit/41c12789c1fd230fa8442db9e3979d0c7372025a))
* include requestContext in inboundCommand, and use it in wallet ([b332870](https://github.com/Agoric/agoric-sdk/commit/b33287032a376b4adf8c5f695321a559550401ea))
* Log (and graph) database disk usage ([9f9f5af](https://github.com/Agoric/agoric-sdk/commit/9f9f5af964d6661bb1d6bd1f2ea91098bcad62b0))
* make ERTP methods acccept promises or payments ([4b7f060](https://github.com/Agoric/agoric-sdk/commit/4b7f06048bb0f86c2028a9c9cfae8ff90b595bd7))
* new multirole (ending with '*') implementation ([442fd20](https://github.com/Agoric/agoric-sdk/commit/442fd202cdd0e361728e1dbb9e0c04ccdfb1e8d4))
* polish link-cli a little ([ffbd029](https://github.com/Agoric/agoric-sdk/commit/ffbd029e71674143adb13c03e06e68bdeff39fae))
* revamp the wallet for brands and Zoe roles ([b4a806c](https://github.com/Agoric/agoric-sdk/commit/b4a806c63a30e7cfca9a4b4c642702935e5741f4))
* separate registerAPIHandler from registerURLHandler ([7c670d9](https://github.com/Agoric/agoric-sdk/commit/7c670d9c5c92f7e229b6895625423702d39d16d2))
* use anylogger ([81a8950](https://github.com/Agoric/agoric-sdk/commit/81a8950c8f4a1e5cae26db463ff1986033e399d5))
* use anylogger to allow flexible message dispatch ([be8abc8](https://github.com/Agoric/agoric-sdk/commit/be8abc8fb8bb684273b13a1732a2bf509a962253))
* **ag-solo:** integrate wallet UI with REPL ([a193e87](https://github.com/Agoric/agoric-sdk/commit/a193e874ea373f5e6345568479ce620401147db2))
* **bigdipper:** add Big Dipper config ([f98ff43](https://github.com/Agoric/agoric-sdk/commit/f98ff43e6305e609c4ddaf953ff7b021a451ffaa))
* **bootstrap:** accept explicit semver (such as --bump=1.17.0) ([b3da002](https://github.com/Agoric/agoric-sdk/commit/b3da00237234353e8acfe121118a6a41e2ef41ba))
* **bundle-source:** make getExport evaluate separate modules ([bec9c66](https://github.com/Agoric/agoric-sdk/commit/bec9c661f9bf08ae676ba3ae3707c0e23599a58d))
* **cosmic-swingset:** use a fake chain for scenario3 ([#322](https://github.com/Agoric/agoric-sdk/issues/322)) ([f833610](https://github.com/Agoric/agoric-sdk/commit/f833610831e687c65a28a0069dc58e74b18d7321))
* **deployment:** add Prometheus support for monitoring ([713f63a](https://github.com/Agoric/agoric-sdk/commit/713f63a4b3ca347ba3c65283228dc33665fc10b3)), closes [#337](https://github.com/Agoric/agoric-sdk/issues/337)
* **E:** export E.resolve to use HandledPromise.resolve ([93c508d](https://github.com/Agoric/agoric-sdk/commit/93c508de8439d8d6b4b6030af3f95c370c46f91f))
* **eval:** end-to-end metered evaluator ([db3acfd](https://github.com/Agoric/agoric-sdk/commit/db3acfd522bd3c7c552c39bf40ebf9f021cb1090))
* **fluentd:** support Loki log store ([c4bffbf](https://github.com/Agoric/agoric-sdk/commit/c4bffbf6e175e8df8bc321d5e955e200118e61bf))
* **HandledPromise:** add sync unwrap() to get presences ([5ec5b78](https://github.com/Agoric/agoric-sdk/commit/5ec5b78a038f11d26827358c70bb6c820ed04a2e)), closes [#412](https://github.com/Agoric/agoric-sdk/issues/412)
* **ibc:** use latest cosmos-sdk/ibc-alpha branch ([153f1b9](https://github.com/Agoric/agoric-sdk/commit/153f1b9d0c1890b7534e749f1e065d5fbdfa3236))
* **init:** use --dapp-template (default @agoric/dapp-simple-exchange) ([3bdf8ff](https://github.com/Agoric/agoric-sdk/commit/3bdf8ff4476279fbb158953ec115939794d4488e))
* **link-cli:** install the Agoric CLI locally ([5e38c5a](https://github.com/Agoric/agoric-sdk/commit/5e38c5a333a09ceb7429b2a843d7e66ebb56dfc6))
* **metering:** allow the metering vat to register refill functions ([ce077a3](https://github.com/Agoric/agoric-sdk/commit/ce077a38aec75a01621ea6a115e919ae607e3aeb))
* **metering:** create a transform to limit resource use ([e2c2b68](https://github.com/Agoric/agoric-sdk/commit/e2c2b68e452eb7608301c4709929971e36d139b1))
* **nestedEvaluate:** support new moduleFormat ([deb8ee7](https://github.com/Agoric/agoric-sdk/commit/deb8ee73437cb86ef98c160239c931305fb370ad))
* **reset-state:** add command to ag-solo to reset SwingSet ([233c0ff](https://github.com/Agoric/agoric-sdk/commit/233c0ff5a682c8b25a457e9c71f9d0b08e6c78ac))
* **spawner:** implement basic metering ([8bd495c](https://github.com/Agoric/agoric-sdk/commit/8bd495ce64ab20a4f7e78999846afe1f9bce96a4))
* **start:** implement `agoric start testnet` ([cbfb306](https://github.com/Agoric/agoric-sdk/commit/cbfb30604b8c2781e564bb250dd58d08c7d57b3c))
* **SwingSet:** pass all tests with metering installed ([d2dbd2c](https://github.com/Agoric/agoric-sdk/commit/d2dbd2c17db613faa18ccfa5903fa0160f90b35e))
* **tame-metering:** new packages for metering ([d421bc5](https://github.com/Agoric/agoric-sdk/commit/d421bc52a7a7c7f781abd37305bc6d6c860c4cbb))
* **tame-metering:** no more Proxy, clean up initialization ([467d62b](https://github.com/Agoric/agoric-sdk/commit/467d62b251d576284d35fd33472ac6c58a0c6d52))
* **transform:** add support for passing RegExp literals through constructor ([5c9e1e7](https://github.com/Agoric/agoric-sdk/commit/5c9e1e71fd2ee20b565d582f438df697098d893a))
* **transform-eventual-send:** pass HandledPromise endowment to evaluator ([7a5b74d](https://github.com/Agoric/agoric-sdk/commit/7a5b74d8204a6af0d33ad05bfa67da714a0a8a5a))
* **zoe:** implement metering of contracts ([9138801](https://github.com/Agoric/agoric-sdk/commit/91388010a4c78741f27896d21df8e610c3ff3b16))


### Performance Improvements

* Remove call to `harden` in `details` for performance reasons ([de1f04b](https://github.com/Agoric/agoric-sdk/commit/de1f04b0427af163b0a50cb645d6d676f09b08de))



# 0.11.0 (2019-11-22)


### Bug Fixes

* **repl:** detect cycles when trying to stringify the value ([0d6fa9e](https://github.com/Agoric/agoric-sdk/commit/0d6fa9e1e0e255c595a86710357cfcb58b400ce7)), closes [#123](https://github.com/Agoric/agoric-sdk/issues/123)
* **rollup:** use preferBuiltins for Node.js bundling ([733faa1](https://github.com/Agoric/agoric-sdk/commit/733faa1243eb18622c568df377f67b9740a1be58))


### Features

* **abort:** provide a separate function to abort the connection ([b9ac6b5](https://github.com/Agoric/agoric-sdk/commit/b9ac6b578731013fc5d8debf45b4904a48dabb98))



## 0.4.5 (2019-11-13)



## 0.10.15 (2019-11-08)


### Bug Fixes

* **ag-setup-solo:** properly pass through the netconfig ([8dcbae1](https://github.com/Agoric/agoric-sdk/commit/8dcbae191b20a96c0133e9ce6cb4770809df87de))
* **bootstrap:** get scenario[#1](https://github.com/Agoric/agoric-sdk/issues/1) to work ([033c654](https://github.com/Agoric/agoric-sdk/commit/033c654c52e48a9b0fdae28de219ebbd19a1d823))
* **dapp:** make autoswap the default ([0ccc7c0](https://github.com/Agoric/agoric-sdk/commit/0ccc7c036e9b9fb3359eadef662631124deab33e))
* **deploy:** Remove mints in deploy scripts ([04de7b0](https://github.com/Agoric/agoric-sdk/commit/04de7b0235e303c0a95c93a5f310093e77707275))
* **E:** don't leak the makeE*Proxy functions directly ([8d5131f](https://github.com/Agoric/agoric-sdk/commit/8d5131f6a7ec35451ec85989ce7467147c7374ff))
* **provisioning-server:** robustness ([e90e6fe](https://github.com/Agoric/agoric-sdk/commit/e90e6feb9245fc98f50241fd3251bc4d54b31cb9))
* **setup:** be sure to use rsync checksum option ([584bc73](https://github.com/Agoric/agoric-sdk/commit/584bc7341920333f1ff87734c871aa346beeb37a))
* **vat-http:** use Promise.allSettled semantics to tolerate errors ([6f9aa68](https://github.com/Agoric/agoric-sdk/commit/6f9aa68894ee265f8f5c73475fb8899c44951850))
* **web:** allow web extension urls ([e40160d](https://github.com/Agoric/agoric-sdk/commit/e40160d1f6c46b2b23132198117558e8c907fe8d))


### Features

* **autoswap:** Reduce the number of awaits in init-autoswap.js ([#119](https://github.com/Agoric/agoric-sdk/issues/119)) ([32aaf84](https://github.com/Agoric/agoric-sdk/commit/32aaf8466546fbc422dbb1c7945b1274decb1d9e))
* **deploy:** allow autoswap and myFirstDapp deploys ([876038c](https://github.com/Agoric/agoric-sdk/commit/876038c599c4cc6abbccde27ee3430da534d8b72))



## 0.10.12 (2019-11-03)


### Bug Fixes

* **wallet:** copy HTML directly ([dadfac8](https://github.com/Agoric/agoric-sdk/commit/dadfac8daf22c7a567160e3b5edee81d0cb68784))


### Features

* **install:** use --force ([f6b4155](https://github.com/Agoric/agoric-sdk/commit/f6b41559221e704356bf48ceffeb2f08d35ce707))
* **startup:** Remove mints ([#116](https://github.com/Agoric/agoric-sdk/issues/116)) ([a911394](https://github.com/Agoric/agoric-sdk/commit/a911394b1c6dc80900ff19c432ebc921f93a01ac))
* **ui:** use installed contractID ([54e9a50](https://github.com/Agoric/agoric-sdk/commit/54e9a50dd79a87275a8aff857be7ab835655c0db))
* **wallet:** Make purses observable ([#115](https://github.com/Agoric/agoric-sdk/issues/115)) ([53e56fe](https://github.com/Agoric/agoric-sdk/commit/53e56fe9f1fb2c5c940314c88b363c2cca869c4a))



## 0.10.11 (2019-11-02)


### Bug Fixes

* **timer:** workaround to prevent monotonic error ([88a934b](https://github.com/Agoric/agoric-sdk/commit/88a934bcefff75bc76a0a8ac9237ec595567f849))



## 0.2.1 (2019-11-02)


### Bug Fixes

* **contract, api:** don't limit files ([8e4fd25](https://github.com/Agoric/agoric-sdk/commit/8e4fd257dfb766c1aa76ff6726212e5d021e7b58))
* **http:** walk the registeredHandlers backward properly ([157b9ad](https://github.com/Agoric/agoric-sdk/commit/157b9ad6ece1ccc9aef61c16fce9c604acf35b3f)), closes [#114](https://github.com/Agoric/agoric-sdk/issues/114)
* **vagrant:** chdir to the dapps directory ([4ca1916](https://github.com/Agoric/agoric-sdk/commit/4ca191685eab56c265e7948a8e7515a66701dbff))
* **yarn:** use local install to avoid permission problems ([0efd29b](https://github.com/Agoric/agoric-sdk/commit/0efd29b0d7f1bc2732264b6d122cc6827255b635))


### Features

* **install:** detect incorrect Go version ([6fb3722](https://github.com/Agoric/agoric-sdk/commit/6fb3722ff0393bdadb7a041e9b9da9f6a812cd8a))
* **vagrant:** add Vagrant instructions ([7e509c0](https://github.com/Agoric/agoric-sdk/commit/7e509c02ec97b28df1ee3784940a3c4d11968ea0))



## 0.1.6 (2019-11-02)


### Bug Fixes

* **start:** don't use Promise.allSettled ([a0067e1](https://github.com/Agoric/agoric-sdk/commit/a0067e1c4431427cd7930ee439a12929965c1bf1))


### Features

* **api:** deploy api handler to cosmic-swingset ([a778018](https://github.com/Agoric/agoric-sdk/commit/a778018b14520ea06ca3c6ca0a6edf1fc691804d))
* **proxy:** Added entry for bridge URL ([8b13b1e](https://github.com/Agoric/agoric-sdk/commit/8b13b1e52a8fba290347579c7f94640712cf4d39))
* **start:** implement solo mode ([71f1fb4](https://github.com/Agoric/agoric-sdk/commit/71f1fb44657923c03589a7ea79c5caa337f16b17))



## 0.10.10 (2019-11-02)


### Features

* **deploy:** upload contracts ([866a4e3](https://github.com/Agoric/agoric-sdk/commit/866a4e3fc84ba86457d568d55edc9666d687b977))
* **http:** expose registeredHandler ([e4ed2bc](https://github.com/Agoric/agoric-sdk/commit/e4ed2bc2201bd91eacf868681ec627e395c960d6))
* **web:** override html with dapp-html if it exists ([a1abbf1](https://github.com/Agoric/agoric-sdk/commit/a1abbf173d472f841b1e914b6b0137c18faed0c8))



## 0.10.9 (2019-11-02)


### Bug Fixes

* **deps:** don't depend on ertp ([97d5f63](https://github.com/Agoric/agoric-sdk/commit/97d5f63c1f60b1e2a638229097659d4f791c707a))


### Features

* **exchange-vat:** Reduce the number of round-trips ([#112](https://github.com/Agoric/agoric-sdk/issues/112)) ([e24e35f](https://github.com/Agoric/agoric-sdk/commit/e24e35f478d13ad5f4d5bde066ea19266771f601))
* **spawner:** add local vat spawner ([7e53b25](https://github.com/Agoric/agoric-sdk/commit/7e53b25d3d9be84f5f9bbec3ab84a3be675cf329))



## 0.1.1 (2019-11-02)


### Bug Fixes

* **ag_pserver:** optimize for many pre-provisioned pubkeys ([42dced0](https://github.com/Agoric/agoric-sdk/commit/42dced0fbef113668041f66821bf2d5f9cbfdfa8))
* **ag-pserver:** don't provision if none needIngress ([c1b1b65](https://github.com/Agoric/agoric-sdk/commit/c1b1b65746dc6cea9580e99f981871869128f8e7))
* **ag-pserver:** use agCosmosHelper in all places ([625e86e](https://github.com/Agoric/agoric-sdk/commit/625e86e4bf6ceb563c372aa5d20067f5eeaa0896))
* **exchange-rate:** Fix the exchange rate assay display ([cbd8b58](https://github.com/Agoric/agoric-sdk/commit/cbd8b588f527a2794af305733fd428d49898cd04))
* **exports:** export the Acorn parser we use ([1cb5497](https://github.com/Agoric/agoric-sdk/commit/1cb54975278d3a4cf017325d5fd1d3ae1a41d3b4))
* **LOADING:** make flag available to CapTP, but not home ([859e7b5](https://github.com/Agoric/agoric-sdk/commit/859e7b55441f8488c2a5d9dcd7c64f25500f4eb0))
* **package:** properly publish to `agoric` ([671ea78](https://github.com/Agoric/agoric-sdk/commit/671ea7827cd8f28529554292b94cf66d6c6697ed))
* **pipelining:** enable pipelining of GET, POST ([d500bf9](https://github.com/Agoric/agoric-sdk/commit/d500bf9f071231f757ea9895de6b42156219904b)), closes [#2](https://github.com/Agoric/agoric-sdk/issues/2)
* **setup:** properly use '-y' in Dockerfile apt-get ([82d5e83](https://github.com/Agoric/agoric-sdk/commit/82d5e83333a85c4fc14ce228c95c5e0194396903))
* **slot:** prevent crosstalk by tracking inbound vs. outbound slots ([19906c4](https://github.com/Agoric/agoric-sdk/commit/19906c4262d8175602ac4ebb2c4e14ee8a9ce140))
* **test:** use same acorn Parser as acorn-eventual-send ([de73b78](https://github.com/Agoric/agoric-sdk/commit/de73b788480e74df0590b3a8709af7caa640fd38))


### Features

* **ag-setup-solo:** new --destroy flag to reset state ([43a87ba](https://github.com/Agoric/agoric-sdk/commit/43a87babd5d2404feaa41408d62d90392a7a6d8f))
* **bundle:** backend implementation for upload-contract, register-http ([b10e244](https://github.com/Agoric/agoric-sdk/commit/b10e24491a1e42610bab065d6d5c1e0648be2324))
* **bundleSource:** use explicit acorn argument ([5aa61eb](https://github.com/Agoric/agoric-sdk/commit/5aa61eb82f35669ff82ad8b24fd98cd732c287d8))
* **DEV:** allow building of sources from cosmic-workspace ([6317d24](https://github.com/Agoric/agoric-sdk/commit/6317d24b7bf016384755fc161d0a6230a1820f7a))
* **docker/ag-solo:** have upload-contract use local install ([4239fef](https://github.com/Agoric/agoric-sdk/commit/4239fef04e87e4eaa4f1a58ebfac30f5dc07aefc))
* **has:** implement 'has' traps ([0b4b1d2](https://github.com/Agoric/agoric-sdk/commit/0b4b1d24f98be9e30a8442d783589c9606841a4b))
* **init:** first cut ([b8069f9](https://github.com/Agoric/agoric-sdk/commit/b8069f958346970445dec9ff90ffebb2428c62b5))
* **init:** more templates ([2d19210](https://github.com/Agoric/agoric-sdk/commit/2d192102520e56db74bb33d434919e2dce3fd6a8))
* **init-autoswap:** bundle command to initialize autoswap ([4c5a146](https://github.com/Agoric/agoric-sdk/commit/4c5a14657d60bf62f0b6fc582c9c19a15853eff5))
* **install:** npm/yarn install ([ad66d97](https://github.com/Agoric/agoric-sdk/commit/ad66d97a94b42f5c2c307c9e9a3ad6a596305ee8))
* **install:** prefer yarn, and install it if not there ([c8add72](https://github.com/Agoric/agoric-sdk/commit/c8add72a5463276b92cf14a4f879a6440cdd6a69))
* **main:** initial cut ([ebde410](https://github.com/Agoric/agoric-sdk/commit/ebde410866c36936b46da9129036f11d661f1264))
* **main:** remove some ambient authority ([dd5accf](https://github.com/Agoric/agoric-sdk/commit/dd5accf9394cb7fa6bc800ed73f629a11a08f1b7))
* **wallet-vat,autoswap-vat:** Create wallet & autoswap backend ([207f884](https://github.com/Agoric/agoric-sdk/commit/207f88451d268d4492db55db7441e4d05c6ba5d7))



## 0.10.7 (2019-10-23)


### Bug Fixes

* **captp:** inband CTP_ABORT to reject all pending promises ([fb3630a](https://github.com/Agoric/agoric-sdk/commit/fb3630a8759a15c94965475682ecfbe5f3b7fe1b))
* **registar:** add unit tests ([772e907](https://github.com/Agoric/agoric-sdk/commit/772e9075a9fff49375592ec7776173beec75baa6))
* **registrar:** PR comments and more tests ([41725bf](https://github.com/Agoric/agoric-sdk/commit/41725bfa4bfc4be456c2123da708b955c778c149))
* **start:** ameliorate race conditions ([98db740](https://github.com/Agoric/agoric-sdk/commit/98db74016f6b6a24e9bf9885334dbc64f8a30930))
* **test:** remove registrar test.only ([9538fda](https://github.com/Agoric/agoric-sdk/commit/9538fdadf53f04e53aa419cb3aaf6e46d546060f))
* **upload-contract:** no automatic contracts/* upload ([654bd5e](https://github.com/Agoric/agoric-sdk/commit/654bd5eed6de2fdeedd8e26757c23590e4990bc9))


### Features

* **disconnected:** function to break all pending promises ([79a930a](https://github.com/Agoric/agoric-sdk/commit/79a930a6c1d0ce9825541675b6eeed5190aa69c1))
* **index:** first cut ([f5606fb](https://github.com/Agoric/agoric-sdk/commit/f5606fb1b3b29fe69beaa9c2889d247131710cc1))
* **vats:** add home.registrar and home.moolah ([4b8ce42](https://github.com/Agoric/agoric-sdk/commit/4b8ce42e7f0384899bb5db1bef8511f09e57d31b))



## 0.4.4 (2019-10-17)


### Features

* **E:** new shortcuts to avoid full chaining ([ebd7e2e](https://github.com/Agoric/agoric-sdk/commit/ebd7e2ef9acfc3316aa07f8bd3dbf3050363615d))



## 0.10.5 (2019-10-16)


### Bug Fixes

* **upload-contract:** prevent race condition when restarting ag-solo ([d478c09](https://github.com/Agoric/agoric-sdk/commit/d478c09a25e7d51c10f4f5e4a2ff70583bd628ff))



# 0.1.0 (2019-10-16)


### Bug Fixes

* **captp:** be sure to bind the questionID, promiseID ([0fd6f30](https://github.com/Agoric/agoric-sdk/commit/0fd6f30b9b50800d1d9ff32cac76ff9fb8c75408))
* **origin:** allow any localhost origin ([80e35fc](https://github.com/Agoric/agoric-sdk/commit/80e35fca88e61384f92ee4ab6b555ebdce162d2f))
* **test-node-version:** temporarily disable until Node.js v12 is LTS ([5852817](https://github.com/Agoric/agoric-sdk/commit/5852817fa1394b75b33a0e814d35409633135b41))
* **upload-contract:** make deterministic ([a24124a](https://github.com/Agoric/agoric-sdk/commit/a24124a5622532d182cac11fbc8661d6aaccf15c))
* **upload-contract:** only run on start if we have a client role ([2101e20](https://github.com/Agoric/agoric-sdk/commit/2101e201892921f84930f0fb4ef90f0c329db37a))


### Features

* **api:** implement dispatch function, more exports ([cad73a2](https://github.com/Agoric/agoric-sdk/commit/cad73a2928c201dfc0a1cf79c5cb0e802ea1c0b9))
* **web:** enforce same-origin for websocket and /vat post ([a704120](https://github.com/Agoric/agoric-sdk/commit/a7041205de4ce95e7aea0be8e53310efdc7c1634))
* **zoe:** allow specifying additional endowments for contracts ([#155](https://github.com/Agoric/agoric-sdk/issues/155)) ([a209c90](https://github.com/Agoric/agoric-sdk/commit/a209c902472f7d40ef65727826f0b81fbdbac199))
* **zoe:** implement 'home.zoe' and Zoe contract upload ([a1a73bd](https://github.com/Agoric/agoric-sdk/commit/a1a73bda9e9ea7987bce6af2e6651016bb48a12e))


### BREAKING CHANGES

* **api:** the default export is now named makeCapTP

Other named exports are E, harden, HandledPromise, Nat.



## 0.4.3 (2019-10-14)


### Bug Fixes

* **applyMethod:** better error reporting for missing methods ([593f142](https://github.com/Agoric/agoric-sdk/commit/593f142e27b5104e11d6c3eecac2869bd9f27792))
* **E.C:** anonymous methods now work ([c0e11a8](https://github.com/Agoric/agoric-sdk/commit/c0e11a88c099ada89ad9394e4227c861fd09ca61))


### Features

* **bootstrap:** allow a thunk instead of a bootstrap object ([d4582fc](https://github.com/Agoric/agoric-sdk/commit/d4582fc663343d119ca4a9664d7f730fc4657366))
* **contractHost:** support new moduleFormat bundling ([185016e](https://github.com/Agoric/agoric-sdk/commit/185016e97d5652c779262001594462c4d172ce65))
* **contracts:** upload to contractHost ([f9e7b5e](https://github.com/Agoric/agoric-sdk/commit/f9e7b5e24602c354210a95444665c037d0cb65c6))
* **contracts:** use home.uploads scratch pad for upload history ([2c8ec64](https://github.com/Agoric/agoric-sdk/commit/2c8ec646db1659a8824e818a20bcca2f0ddd0ff7))
* **upload-contract:** push zoe-* contracts as well ([32037fb](https://github.com/Agoric/agoric-sdk/commit/32037fb0ac1781f42837ba4189551cd0ca54dd84))



## 0.4.1 (2019-10-11)


### Features

* **E.C:** implement strawman chaining proxy ([f97d5a4](https://github.com/Agoric/agoric-sdk/commit/f97d5a4859b7ec1a3505e9afee62d6fe900cbcdd))
* **HandledPromise:** add applyFunction static methods ([4f0e4bf](https://github.com/Agoric/agoric-sdk/commit/4f0e4bf7809019d98d034ec5c01891e5d595ef7f))
* **scenario2:** enable multiple solo nodes ([c8337f9](https://github.com/Agoric/agoric-sdk/commit/c8337f9036fcf7a2c8289b6d89ba08c2c5e49dfd))



## 0.10.4 (2019-10-09)



## 0.0.27 (2019-10-08)



# 0.4.0 (2019-10-08)



## 0.10.3 (2019-10-07)



## 0.10.2 (2019-10-04)



## 0.10.1 (2019-10-03)



## 0.0.26 (2019-10-02)



## 0.3.3 (2019-10-02)



## 0.0.25 (2019-10-02)



## 0.3.2 (2019-10-01)



## 0.3.1 (2019-10-01)



# 0.10.0 (2019-09-26)



## 0.0.24 (2019-09-26)



## 0.0.23 (2019-09-26)



# 0.3.0 (2019-09-26)



## 0.2.5 (2019-09-26)



## 0.9.1 (2019-09-18)



## 0.0.22 (2019-09-18)



# 0.9.0 (2019-09-11)



## 0.8.8 (2019-09-10)



## 0.0.21 (2019-09-09)



## 0.2.4 (2019-09-06)



## 0.8.7 (2019-09-05)



## 0.8.6 (2019-09-04)



## 0.0.20 (2019-09-03)


### Reverts

* Revert "require Node.js v12" ([6feaf2a](https://github.com/Agoric/agoric-sdk/commit/6feaf2a601152413a32e2d4b10a6d2f29fa57fd4)), closes [#99](https://github.com/Agoric/agoric-sdk/issues/99)



## 0.8.5 (2019-08-28)



## 0.8.4 (2019-08-21)



## 0.8.3 (2019-08-16)



## 0.8.2 (2019-08-16)



## 0.8.1 (2019-08-14)



# 0.8.0 (2019-08-14)



## 0.2.3 (2019-08-13)



## 0.7.8 (2019-08-07)



## 0.0.19 (2019-08-06)



## 0.7.7 (2019-08-06)



## 0.7.5 (2019-08-01)



## 0.0.18 (2019-08-01)


### Reverts

* Revert "index.js: share the unfulfilled handler in promise chains" ([988b3fc](https://github.com/Agoric/agoric-sdk/commit/988b3fcf319f6bdde49e02c7f23530220c9d7e62))



## 0.0.17 (2019-07-31)



# 0.2.0 (2019-07-31)


### Bug Fixes

* better @agoric/evaluate integration ([e906028](https://github.com/Agoric/agoric-sdk/commit/e906028073369153339e7e7103c8a972d06aa41c))



## 0.0.16 (2019-07-24)



## 0.1.10 (2019-07-13)


### Reverts

* Revert "fix: invoke the handler synchronously" ([b2e5d08](https://github.com/Agoric/agoric-sdk/commit/b2e5d08fb68edfb7c48f12fb1b1f57214ab381dc))



## 0.1.9 (2019-07-13)


### Bug Fixes

* invoke the handler synchronously ([6d957e6](https://github.com/Agoric/agoric-sdk/commit/6d957e689c6ea084d87bf7d3dfb79264578bcade))



## 0.1.8 (2019-07-12)



## 0.1.7 (2019-07-12)



## 0.1.4 (2019-07-11)


### Bug Fixes

* properly postpone multiple arguments ([54d53d4](https://github.com/Agoric/agoric-sdk/commit/54d53d44179dffb09784191d4782f195de6d4070)), closes [#9](https://github.com/Agoric/agoric-sdk/issues/9) [#12](https://github.com/Agoric/agoric-sdk/issues/12)



## 0.1.3 (2019-07-10)



## 0.7.3 (2019-06-20)


### Bug Fixes

* prefix the GetMailbox Has check ([ebd61e4](https://github.com/Agoric/agoric-sdk/commit/ebd61e4b486ca758b1307d5a175f469b8e138cb5))
* pserver ag-cosmos-helper binary ([b4d55d7](https://github.com/Agoric/agoric-sdk/commit/b4d55d76bfef188b0334c237d34a18b33a2643e0))
* syntax ([699311e](https://github.com/Agoric/agoric-sdk/commit/699311efcf74b838b9a86cc451843b2faed8ec6e))


### Reverts

* Revert "wire together 'user' storage device" ([e2fe21b](https://github.com/Agoric/agoric-sdk/commit/e2fe21b7bab032afa4c3bb25679c5211c9982c0c))
