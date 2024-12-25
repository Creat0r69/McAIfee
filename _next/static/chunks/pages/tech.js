(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function (e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
            return t(2304)
        }])
    }, 2304: function (e, n, t) {
        "use strict";
        t.r(n), t.d(n, {
            default: function () {
                return l
            }
        });
        var o = t(5893), a = t(9008), r = t.n(a), i = t(3896), s = t.n(i), c = t(7294), m = t(4298), h = t.n(m);

        function l() {
            return (0, c.useEffect)(() => {
                var e = document.getElementById("c"), n = e.getContext("2d");
                e.height = window.innerHeight, e.width = window.innerWidth;
                var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
                t = t.split("");
                for (var o = e.width / 10, a = [], r = 0; r < o; r++) a[r] = 1;
                setInterval(function () {
                    n.fillStyle = "rgba(0, 0, 0, 0.04)", n.fillRect(0, 0, e.width, e.height), n.fillStyle = "#88006c", n.font = "10px arial";
                    for (var o = 0; o < a.length; o++) {
                        var r = t[Math.floor(Math.random() * t.length)];
                        n.fillText(r, 10 * o, 10 * a[o]), 10 * a[o] > e.height && Math.random() > .975 && (a[o] = 0), a[o]++
                    }
                }, 35)
            }, []), (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)(r(), {
                    children: [(0, o.jsx)("title", {children: "John McAIfee"}), (0, o.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0, o.jsx)("meta", {
                        property: "og:image",
                        content: "/pfp.jpg"
                    }), (0, o.jsx)("meta", {
                        property: "og:image:type",
                        content: "image/jpeg"
                    }), (0, o.jsx)("meta", {
                        property: "og:image:width",
                        content: "420"
                    }), (0, o.jsx)("meta", {
                        property: "og:image:height",
                        content: "420"
                    }), (0, o.jsx)("meta", {property: "og:type", content: "website"}), (0, o.jsx)("link", {
                        rel: "icon",
                        href: "/pfp.jpg"
                    })]
                }), (0, o.jsx)(h(), {type: "module", src: "./scripts/pfp.js"}),
                    (0, o.jsx)("canvas", {
                    id: "c",
                    width: "2300",
                    height: "750"
                }),
                    /*(0, o.jsx)("pre", {
                        id: "mainAscii",
                        className: s().ascii,
                        children: "\n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "          JJJJJJJJJJJ                 hhhhhhh                                                                                                               \n" +
                            "          J:::::::::J                 h:::::h                                                                                                               \n" +
                            "          J:::::::::J                 h:::::h                                                                                                               \n" +
                            "          JJ:::::::JJ                 h:::::h                                                                                                               \n" +
                            "            J:::::J     ooooooooooo    h::::h hhhhh       nnnn  nnnnnnnn                                                                                    \n" +
                            "            J:::::J   oo:::::::::::oo  h::::hh:::::hhh    n:::nn::::::::nn                                                                                  \n" +
                            "            J:::::J  o:::::::::::::::o h::::::::::::::hh  n::::::::::::::nn                                                                                 \n" +
                            "            J:::::j  o:::::ooooo:::::o h:::::::hhh::::::h nn:::::::::::::::n                                                                                \n" +
                            "            J:::::J  o::::o     o::::o h::::::h   h::::::h  n:::::nnnn:::::n                                                                                \n" +
                            "JJJJJJJ     J:::::J  o::::o     o::::o h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            "J:::::J     J:::::J  o::::o     o::::o h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            "J::::::J   J::::::J  o::::o     o::::o h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            "J:::::::JJJ:::::::J  o:::::ooooo:::::o h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            " JJ:::::::::::::JJ   o:::::::::::::::o h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            "   JJ:::::::::JJ      oo:::::::::::oo  h:::::h     h:::::h  n::::n    n::::n                                                                                \n" +
                            "     JJJJJJJJJ          ooooooooooo    hhhhhhh     hhhhhhh  nnnnnn    nnnnnn                                                                                \n" +
                            "MMMMMMMM               MMMMMMMM                                   AAA               IIIIIIIIII    ffffffffffffffff                                          \n" +
                            "M:::::::M             M:::::::M                                  A:::A              I::::::::I   f::::::::::::::::f                                         \n" +
                            "M::::::::M           M::::::::M                                 A:::::A             I::::::::I  f::::::::::::::::::f                                        \n" +
                            "M:::::::::M         M:::::::::M                                A:::::::A            II::::::II  f::::::fffffff:::::f                                        \n" +
                            "M::::::::::M       M::::::::::M    cccccccccccccccc           A:::::::::A             I::::I    f:::::f       ffffff    eeeeeeeeeeee        eeeeeeeeeeee    \n" +
                            "M:::::::::::M     M:::::::::::M  cc:::::::::::::::c          A:::::A:::::A            I::::I    f:::::f               ee::::::::::::ee    ee::::::::::::ee  \n" +
                            "M:::::::M::::M   M::::M:::::::M c:::::::::::::::::c         A:::::A A:::::A           I::::I   f:::::::ffffff        e::::::eeeee:::::ee e::::::eeeee:::::ee\n" +
                            "M::::::M M::::M M::::M M::::::Mc:::::::cccccc:::::c        A:::::A   A:::::A          I::::I   f::::::::::::f       e::::::e     e:::::ee::::::e     e:::::e\n" +
                            "M::::::M  M::::M::::M  M::::::Mc::::::c     ccccccc       A:::::A     A:::::A         I::::I   f::::::::::::f       e:::::::eeeee::::::ee:::::::eeeee::::::e\n" +
                            "M::::::M   M:::::::M   M::::::Mc:::::c                   A:::::AAAAAAAAA:::::A        I::::I   f:::::::ffffff       e:::::::::::::::::e e:::::::::::::::::e \n" +
                            "M::::::M    M:::::M    M::::::Mc:::::c                  A:::::::::::::::::::::A       I::::I    f:::::f             e::::::eeeeeeeeeee  e::::::eeeeeeeeeee  \n" +
                            "M::::::M     MMMMM     M::::::Mc::::::c     ccccccc    A:::::AAAAAAAAAAAAA:::::A      I::::I    f:::::f             e:::::::e           e:::::::e           \n" +
                            "M::::::M               M::::::Mc:::::::cccccc:::::c   A:::::A             A:::::A   II::::::II f:::::::f            e::::::::e          e::::::::e          \n" +
                            "M::::::M               M::::::M c:::::::::::::::::c  A:::::A               A:::::A  I::::::::I f:::::::f             e::::::::eeeeeeee   e::::::::eeeeeeee  \n" +
                            "M::::::M               M::::::M  cc:::::::::::::::c A:::::A                 A:::::A I::::::::I f:::::::f              ee:::::::::::::e    ee:::::::::::::e  \n" +
                            "MMMMMMMM               MMMMMMMM    ccccccccccccccccAAAAAAA                   AAAAAAAIIIIIIIIII fffffffff                eeeeeeeeeeeeee      eeeeeeeeeeeeee  \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n" +
                            "                                                                                                                                                            \n"
                    }),*/ (0, o.jsxs)("main", {
                        className: s().main, children: [
                            (0, o.jsx)("div", {
                                className: "container", children: (0, o.jsxs)("div", {
                                    className: "",
                                    children: [(0, o.jsxs)("div", {
                                        className: "body",
                                        children: [(0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [
                                                (0, o.jsx)("pre", {
                                                    id: "mainAscii",
                                                    className: s().ascii,
                                                    children: "\n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                      TTTTTTTTTTTTTTTTTTTTTTT                                        hhhhhhh             \n" +
                                                        "T:::::::::::::::::::::Th:::::h                                      T:::::::::::::::::::::T                                        h:::::h             \n" +
                                                        "T:::::::::::::::::::::Th:::::h                                      T:::::::::::::::::::::T                                        h:::::h             \n" +
                                                        "T:::::TT:::::::TT:::::Th:::::h                                      T:::::TT:::::::TT:::::T                                        h:::::h             \n" +
                                                        "TTTTTT  T:::::T  TTTTTT h::::h hhhhh           eeeeeeeeeeee         TTTTTT  T:::::T  TTTTTT    eeeeeeeeeeee        cccccccccccccccc h::::h hhhhh       \n" +
                                                        "        T:::::T         h::::hh:::::hhh      ee::::::::::::ee               T:::::T          ee::::::::::::ee    cc:::::::::::::::c h::::hh:::::hhh    \n" +
                                                        "        T:::::T         h::::::::::::::hh   e::::::eeeee:::::ee             T:::::T         e::::::eeeee:::::ee c:::::::::::::::::c h::::::::::::::hh  \n" +
                                                        "        T:::::T         h:::::::hhh::::::h e::::::e     e:::::e             T:::::T        e::::::e     e:::::ec:::::::cccccc:::::c h:::::::hhh::::::h \n" +
                                                        "        T:::::T         h::::::h   h::::::he:::::::eeeee::::::e             T:::::T        e:::::::eeeee::::::ec::::::c     ccccccc h::::::h   h::::::h\n" +
                                                        "        T:::::T         h:::::h     h:::::he:::::::::::::::::e              T:::::T        e:::::::::::::::::e c:::::c              h:::::h     h:::::h\n" +
                                                        "        T:::::T         h:::::h     h:::::he::::::eeeeeeeeeee               T:::::T        e::::::eeeeeeeeeee  c:::::c              h:::::h     h:::::h\n" +
                                                        "        T:::::T         h:::::h     h:::::he:::::::e                        T:::::T        e:::::::e           c::::::c     ccccccc h:::::h     h:::::h\n" +
                                                        "      TT:::::::TT       h:::::h     h:::::he::::::::e                     TT:::::::TT      e::::::::e          c:::::::cccccc:::::c h:::::h     h:::::h\n" +
                                                        "      T:::::::::T       h:::::h     h:::::h e::::::::eeeeeeee             T:::::::::T       e::::::::eeeeeeee   c:::::::::::::::::c h:::::h     h:::::h\n" +
                                                        "      T:::::::::T       h:::::h     h:::::h  ee:::::::::::::e             T:::::::::T        ee:::::::::::::e    cc:::::::::::::::c h:::::h     h:::::h\n" +
                                                        "      TTTTTTTTTTT       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee             TTTTTTTTTTT          eeeeeeeeeeeeee      cccccccccccccccc hhhhhhh     hhhhhhh\n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n" +
                                                        "                                                                                                                                                       \n"
                                                }),
                                            ]
                                        })]
                                    })]
                                })
                            }),
                            (0, o.jsx)("div", {
                                className: "container", children: (0, o.jsxs)("div", {
                                    className: "mac-terminal",
                                    children: [(0, o.jsxs)("div", {
                                        className: "body",
                                        children: [(0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "We have meticulously fine-tuned an advanced Large Language Model (LLM),\n" +
                                                    "specifically the Llama 3.2, using an extensive dataset comprising:"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "\xa0\xa0\xa0 X post history of John McAfee, capturing his real-time thoughts and reactions\n" +
                                                    "over the years."
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "\xa0\xa0\xa0 Books authored by John McAfee, to delve into his philosophical, technical, and\n" +
                                                    "personal insights."
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "\xa0\xa0\xa0 Transcripts from interviews, providing insights into his conversational style and\n" +
                                                    "depth of knowledge."
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                {
                                                    children: "This fine-tuning process has enabled us to develop an AI that mirrors John McAfee's\n" +
                                                        "unique thought patterns, mindset, and tone of voice. Here's how we achieved this:"
                                                })]
                                        }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Data Preprocessing:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 We cleaned and normalized the text data to ensure\n" +
                                                            "consistency, dealing with issues like varying text formats and colloquial language\n" +
                                                            "use."
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Model Adaptation:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 Through a series of training epochs, we adapted the Llama\n" +
                                                            "3.2 model to recognize and replicate McAfee's linguistic nuances, including his\n" +
                                                            "characteristic humor, skepticism, and tech-savvy insights.\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Contextual Understanding:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 We implemented custom layers that enhance the\n" +
                                                            "model's ability to understand and generate responses based on McAfee's known\n" +
                                                            "perspectives on technology, privacy, cryptocurrency, and more"
                                                    })]
                                            }), (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Interactive Interface:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 The AI, which we've named Aifee, can now be interacted\n" +
                                                            "with directly via an X account. Users can engage in dialogues where Aifee\n" +
                                                            "responds as McAfee might have, using his vocabulary, tone, and even his\n" +
                                                            "speculative or controversial viewpoints.\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "User Engagement and Model Improvement:\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Feedback Loop:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 By interacting with Aifee, users can contribute to its learning\n" +
                                                            "curve. Each interaction helps refine the model's responses, making them more\n" +
                                                            "aligned with McAfee's known positions.\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Market Knowledge Integration:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0Users are encouraged to share market insights\n" +
                                                            "or ask questions related to tech trends, privacy issues, or crypto markets, which\n" +
                                                            "helps in updating Aifee's knowledge base, akin to how McAfee would have\n" +
                                                            "absorbed new information.\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Continuous Learning:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0  Aifee is set up with mechanisms for ongoing learning,\n" +
                                                            "where new data, including user interactions, are used to retrain the model\n" +
                                                            "periodically, ensuring it evolves with the crypto and tech landscape."
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "By engaging with Aifee, users not only experience a near-replica of conversing with John\n" +
                                                            "McAfee but also contribute to the enhancement of this AI, keeping his legacy interactive\n" +
                                                            "and dynamic within the digital realm.\n"
                                                    })]
                                            }),
                                        ]
                                    })]
                                })
                            })
                        ]
                    })]
            })
        }
    }, 3896: function (e) {
        e.exports = {
            main: "Idea_main__2uIek",
            infos: "Home_infos__KQuRm",
            pfps: "Home_pfps__bMugZ",
            actPFP: "Home_actPFP__Lj_XE",
            act: "Home_act__HZ6TD",
            title: "Home_title__YEn0u",
            infoTop: "Home_infoTop__yx02a",
            alts: "Home_alts__2YBet",
            dexPaid: "Home_dexPaid__clVem",
            contractAddress: "Home_contractAddress__W_XAu",
            pump: "Home_pump__GhQHf",
            pumpTitle: "Home_pumpTitle__lfvDn",
            ascii: "Home_ascii__YbdS9",
            thumbGif: "Home_thumbGif__uqUhu",
            photoShoot: "Home_photoShoot__Y6DmA",
            photoShootTitle: "Home_photoShootTitle__YTUuk",
            photoShootParent: "Home_photoShootParent__uWdGt",
            photoShootChild: "Home_photoShootChild__olHmM"
        }
    }, 9008: function (e, n, t) {
        e.exports = t(4764)
    }, 4298: function (e, n, t) {
        e.exports = t(3773)
    }
}, function (e) {
    e.O(0, [774, 888, 179], function () {
        return e(e.s = 5557)
    }), _N_E = e.O()
}]);