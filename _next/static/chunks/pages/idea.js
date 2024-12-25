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
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                        dddddddd                                      \n" +
                                                    "TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                        iiii              d::::::d                                      \n" +
                                                    "T:::::::::::::::::::::Th:::::h                                       i::::i             d::::::d                                      \n" +
                                                    "T:::::::::::::::::::::Th:::::h                                        iiii              d::::::d                                      \n" +
                                                    "T:::::TT:::::::TT:::::Th:::::h                                                          d:::::d                                       \n" +
                                                    "TTTTTT  T:::::T  TTTTTT h::::h hhhhh           eeeeeeeeeeee         iiiiiii     ddddddddd:::::d     eeeeeeeeeeee      aaaaaaaaaaaaa   \n" +
                                                    "        T:::::T         h::::hh:::::hhh      ee::::::::::::ee       i:::::i   dd::::::::::::::d   ee::::::::::::ee    a::::::::::::a  \n" +
                                                    "        T:::::T         h::::::::::::::hh   e::::::eeeee:::::ee      i::::i  d::::::::::::::::d  e::::::eeeee:::::ee  aaaaaaaaa:::::a \n" +
                                                    "        T:::::T         h:::::::hhh::::::h e::::::e     e:::::e      i::::i d:::::::ddddd:::::d e::::::e     e:::::e           a::::a \n" +
                                                    "        T:::::T         h::::::h   h::::::he:::::::eeeee::::::e      i::::i d::::::d    d:::::d e:::::::eeeee::::::e    aaaaaaa:::::a \n" +
                                                    "        T:::::T         h:::::h     h:::::he:::::::::::::::::e       i::::i d:::::d     d:::::d e:::::::::::::::::e   aa::::::::::::a \n" +
                                                    "        T:::::T         h:::::h     h:::::he::::::eeeeeeeeeee        i::::i d:::::d     d:::::d e::::::eeeeeeeeeee   a::::aaaa::::::a \n" +
                                                    "        T:::::T         h:::::h     h:::::he:::::::e                 i::::i d:::::d     d:::::d e:::::::e           a::::a    a:::::a \n" +
                                                    "      TT:::::::TT       h:::::h     h:::::he::::::::e               i::::::id::::::ddddd::::::dde::::::::e          a::::a    a:::::a \n" +
                                                    "      T:::::::::T       h:::::h     h:::::h e::::::::eeeeeeee       i::::::i d:::::::::::::::::d e::::::::eeeeeeee  a:::::aaaa::::::a \n" +
                                                    "      T:::::::::T       h:::::h     h:::::h  ee:::::::::::::e       i::::::i  d:::::::::ddd::::d  ee:::::::::::::e   a::::::::::aa:::a\n" +
                                                    "      TTTTTTTTTTT       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee       iiiiiiii   ddddddddd   ddddd    eeeeeeeeeeeeee    aaaaaaaaaa  aaaa\n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n" +
                                                    "                                                                                                                                      \n"
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
                                                children: "The crypto world lost one of its most vibrant figures when John McAfee passed away\n" +
                                                    "under mysterious circumstances in 2021. Known as a maverick in the realms of\n" +
                                                    "cybersecurity, cryptocurrency, and privacy advocacy, McAfee was not just a legend but a\n" +
                                                    "beacon for decentralization, often challenging the status quo with his sharp wit and\n" +
                                                    "profound insights. The void left by his absence has been felt keenly, leaving a\n" +
                                                    "community of followers and believers in his philosophy longing for his guidance,\n" +
                                                    "intelligence, and unique sense of humor.\n"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "The nostalgia for McAfee's daily \"Coin of the Day\" posts on X, his audacious challenges\n" +
                                                    "to conventional thinking, and his relentless advocacy for privacy and freedom in the\n" +
                                                    "digital age inspired us to pursue an unprecedented endeavor: to resurrect John\n" +
                                                    "McAfee on X through AI."
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-result",
                                                children: "Leveraging cutting-edge AI technology, we have embarked on a project to:"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {
                                                className: "body__row-folder",
                                                children: "\xa0\xa0\xa0 Clone John McAfee's Mindset and Tone:"
                                            }), (0, o.jsx)("span", {children: "\xa0 "})]
                                        }), (0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                {
                                                    children: "\xa0\xa0\xa0 By training an AI model on a comprehensive dataset that includes McAfee’s X posts, interviews, writings, and public statements, we've aimed to encapsulate his unique blend of humor,skepticism, and visionary thinking."

                                                })]
                                        }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Replicate His Philosophical Stance:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 Our AI, which we've affectionately named\n" +
                                                            "Aifee, is designed to mirror McAfee’s strong advocacy for privacy, his critical\n" +
                                                            "views on government surveillance, and his critique of Big Tech's influence. This\n" +
                                                            "includes integrating his philosophical beliefs about freedom, the role of\n" +
                                                            "technology in society, and his sometimes controversial takes on life's larger\n" +
                                                            "questions.\n"
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Capture His Political Beliefs:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 Aifee also reflects McAfee’s political ideals, his\n" +
                                                            "libertarian views, and his push for a world where individuals control their data and\n" +
                                                            "digital identity, free from oppressive oversight."
                                                    })]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {
                                                    className: "body__row-folder",
                                                    children: "\xa0\xa0\xa0 Dynamic Interaction:"
                                                }), (0, o.jsx)("span", {children: "\xa0 "})]
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: "body__row",
                                                children: [(0, o.jsx)("span", {children: "\xa0 "}), (0, o.jsx)("span",
                                                    {
                                                        children: "\xa0\xa0\xa0 Beyond mere replication, we intend for Aifee to engage\n" +
                                                            "with the community in real-time on X, offering insights, predictions, and even his\n" +
                                                            "famous coin endorsements, all while maintaining the essence of McAfee's\n" +
                                                            "provocative and engaging style."
                                                    })]
                                            })
                                        ]
                                    })]
                                })
                            }),
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