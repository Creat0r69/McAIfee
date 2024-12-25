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
                }), (0, o.jsx)(h(), {type: "module", src: "./scripts/pfp.js"}), (0, o.jsx)("canvas", {
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
                        className: s().main, children: [(0, o.jsxs)("div", {
                            className: s().infos,
                            children: [(0, o.jsx)("div", {
                                className: s().pfps,
                                children: (0, o.jsx)("img", {className: s().actPFP, src: "./pfp.jpg"})
                            }), (0, o.jsx)("div", {
                                className: "container", children: (0, o.jsxs)("div", {
                                    className: "",
                                    children: [(0, o.jsxs)("div", {
                                        className: "body",
                                        children: [(0, o.jsxs)("div", {
                                            className: "body__row",
                                            children: [(0, o.jsx)("span", {className: "body__row-arrow"}), (0, o.jsx)
                                                , (0, o.jsx)("span", {
                                                    className: "body__row-git--branch",
                                                    children: "CA:"
                                                }), (0, o.jsx)("span", {
                                                    className: "body__row-result",
                                                    style: {color: "#39FF14"},
                                                    children: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                })]
                                        })]
                                    })]
                                })
                            })]
                        }),
                            (0, o.jsx)("div", {
                                className: "container",
                                children: (0, o.jsxs)("div", {
                                    className: "row", // Added a row container for flexbox or grid styling
                                    children: [
                                        (0, o.jsx)("div", {
                                            className: "card", // Card 1
                                            children: (0, o.jsxs)("div", {
                                                className: "mac-terminal1",
                                                children: [(0, o.jsx)("div", {
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
                                                                            "                                                                                                                                      \n"
                                                                    }),
                                                                ]
                                                            })]
                                                        })]
                                                    })
                                                }),
                                                    (0, o.jsxs)("div", {
                                                        className: "body",
                                                        children: [
                                                            (0, o.jsxs)("div", {
                                                                className: "body__row",
                                                                children: [
                                                                    (0, o.jsx)("span", {
                                                                        className: "body__row-result",
                                                                        children: "After John McAfee's death in 2021, his legacy in crypto and privacy advocacy lives on through our AI agent called \"Aifee,\" designed to emulate his distinctive personality on X, Telegram and more."
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                ]
                                            }),
                                        }),
                                        (0, o.jsx)("div", {
                                            className: "card", // Card 2 (duplicate of Card 1)
                                            children: (0, o.jsxs)("div", {
                                                className: "mac-terminal1",
                                                children: [
                                                    (0, o.jsxs)("div", {
                                                        className: "body",
                                                        children: [
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
                                                                                        "                                                                                                                                                       \n"
                                                                                }),
                                                                            ]
                                                                        })]
                                                                    })]
                                                                })
                                                            }),
                                                            (0, o.jsxs)("div", {
                                                                className: "body__row",
                                                                children: [

                                                                    (0, o.jsx)("span", {
                                                                        className: "body__row-result",
                                                                        children: "We've fine-tuned a Llama 3.2 model with John McAfee's X posts, interviews, and books to create Aifee, an AI that mimics his unique style and thoughts. Aifee interacts on X, keeping McAfee's legacy alive in the digital world."
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                ]
                                            }),
                                        }),
                                    ]
                                }),
                            }),
                            (0, o.jsx)("div", {
                                className: "container",
                                children: (0, o.jsxs)("div", {
                                    className: "row", // Added a row container for flexbox or grid styling
                                    children: [
                                        (0, o.jsx)("div", {
                                            className: "card", // Card 1
                                            children: (0, o.jsxs)("div", {
                                                className: "mac-terminal1" +
                                                    "",
                                                children: [(0, o.jsx)("div", {
                                                    className: "container", children: (0, o.jsxs)("div", {
                                                        className: "",
                                                        children: [(0, o.jsx)("div", {
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
                                                                                    "                                                                                                                                                                   \n" +
                                                                                    "                                                                                                                                                                   \n" +
                                                                                    "TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                      VVVVVVVV           VVVVVVVV  iiii                     iiii                                     \n" +
                                                                                    "T:::::::::::::::::::::Th:::::h                                      V::::::V           V::::::V i::::i                   i::::i                                    \n" +
                                                                                    "T:::::::::::::::::::::Th:::::h                                      V::::::V           V::::::V  iiii                     iiii                                     \n" +
                                                                                    "T:::::TT:::::::TT:::::Th:::::h                                      V::::::V           V::::::V                                                                    \n" +
                                                                                    "TTTTTT  T:::::T  TTTTTT h::::h hhhhh           eeeeeeeeeeee          V:::::V           V:::::V iiiiiii     ssssssssss   iiiiiii    ooooooooooo   nnnn  nnnnnnnn    \n" +
                                                                                    "        T:::::T         h::::hh:::::hhh      ee::::::::::::ee         V:::::V         V:::::V  i:::::i   ss::::::::::s  i:::::i  oo:::::::::::oo n:::nn::::::::nn  \n" +
                                                                                    "        T:::::T         h::::::::::::::hh   e::::::eeeee:::::ee        V:::::V       V:::::V    i::::i ss:::::::::::::s  i::::i o:::::::::::::::on::::::::::::::nn \n" +
                                                                                    "        T:::::T         h:::::::hhh::::::h e::::::e     e:::::e         V:::::V     V:::::V     i::::i s::::::ssss:::::s i::::i o:::::ooooo:::::onn:::::::::::::::n\n" +
                                                                                    "        T:::::T         h::::::h   h::::::he:::::::eeeee::::::e          V:::::V   V:::::V      i::::i  s:::::s  ssssss  i::::i o::::o     o::::o  n:::::nnnn:::::n\n" +
                                                                                    "        T:::::T         h:::::h     h:::::he:::::::::::::::::e            V:::::V V:::::V       i::::i    s::::::s       i::::i o::::o     o::::o  n::::n    n::::n\n" +
                                                                                    "        T:::::T         h:::::h     h:::::he::::::eeeeeeeeeee              V:::::V:::::V        i::::i       s::::::s    i::::i o::::o     o::::o  n::::n    n::::n\n" +
                                                                                    "        T:::::T         h:::::h     h:::::he:::::::e                        V:::::::::V         i::::i ssssss   s:::::s  i::::i o::::o     o::::o  n::::n    n::::n\n" +
                                                                                    "      TT:::::::TT       h:::::h     h:::::he::::::::e                        V:::::::V         i::::::is:::::ssss::::::si::::::io:::::ooooo:::::o  n::::n    n::::n\n" +
                                                                                    "      T:::::::::T       h:::::h     h:::::h e::::::::eeeeeeee                 V:::::V          i::::::is::::::::::::::s i::::::io:::::::::::::::o  n::::n    n::::n\n" +
                                                                                    "      T:::::::::T       h:::::h     h:::::h  ee:::::::::::::e                  V:::V           i::::::i s:::::::::::ss  i::::::i oo:::::::::::oo   n::::n    n::::n\n" +
                                                                                    "      TTTTTTTTTTT       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee                   VVV            iiiiiiii  sssssssssss    iiiiiiii   ooooooooooo     nnnnnn    nnnnnn\n" +
                                                                                    "                                                                                                                                                                   \n"
                                                                            }),
                                                                        ]
                                                                    })]
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }),
                                                    (0, o.jsxs)("div", {
                                                        className: "body",
                                                        children: [
                                                            (0, o.jsxs)("div", {
                                                                className: "body__row",
                                                                children: [
                                                                    (0, o.jsx)("span", {
                                                                        className: "body__row-result",
                                                                        children: "The Aifee project transcends nostalgia, aiming to educate on McAfee's principles, engage communities in his philosophy, and preserve his legacy of promoting freedom and innovation in blockchain."
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                ]
                                            }),
                                        }),
                                        (0, o.jsx)("div", {
                                            className: "card", // Card 2 (duplicate of Card 1)
                                            children: (0, o.jsxs)("div", {
                                                className: "mac-terminal1",
                                                children: [
                                                    (0, o.jsxs)("div", {
                                                        className: "body",
                                                        children: [
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
                                                                                        "                                                                                                                                                                                     \n" +
                                                                                        "                                                                                                                                                                                     \n" +
                                                                                        "TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                                                 tttt            iiii  lllllll   iiii           tttt                                   \n" +
                                                                                        "T:::::::::::::::::::::Th:::::h                                                              ttt:::t           i::::i l:::::l  i::::i       ttt:::t                                   \n" +
                                                                                        "T:::::::::::::::::::::Th:::::h                                                              t:::::t            iiii  l:::::l   iiii        t:::::t                                   \n" +
                                                                                        "T:::::TT:::::::TT:::::Th:::::h                                                              t:::::t                  l:::::l               t:::::t                                   \n" +
                                                                                        "TTTTTT  T:::::T  TTTTTT h::::h hhhhh           eeeeeeeeeeee         uuuuuu    uuuuuu  ttttttt:::::ttttttt    iiiiiii  l::::l iiiiiii ttttttt:::::ttttttt    yyyyyyy           yyyyyyy\n" +
                                                                                        "        T:::::T         h::::hh:::::hhh      ee::::::::::::ee       u::::u    u::::u  t:::::::::::::::::t    i:::::i  l::::l i:::::i t:::::::::::::::::t     y:::::y         y:::::y \n" +
                                                                                        "        T:::::T         h::::::::::::::hh   e::::::eeeee:::::ee     u::::u    u::::u  t:::::::::::::::::t     i::::i  l::::l  i::::i t:::::::::::::::::t      y:::::y       y:::::y  \n" +
                                                                                        "        T:::::T         h:::::::hhh::::::h e::::::e     e:::::e     u::::u    u::::u  tttttt:::::::tttttt     i::::i  l::::l  i::::i tttttt:::::::tttttt       y:::::y     y:::::y   \n" +
                                                                                        "        T:::::T         h::::::h   h::::::he:::::::eeeee::::::e     u::::u    u::::u        t:::::t           i::::i  l::::l  i::::i       t:::::t              y:::::y   y:::::y    \n" +
                                                                                        "        T:::::T         h:::::h     h:::::he:::::::::::::::::e      u::::u    u::::u        t:::::t           i::::i  l::::l  i::::i       t:::::t               y:::::y y:::::y     \n" +
                                                                                        "        T:::::T         h:::::h     h:::::he::::::eeeeeeeeeee       u::::u    u::::u        t:::::t           i::::i  l::::l  i::::i       t:::::t                y:::::y:::::y      \n" +
                                                                                        "        T:::::T         h:::::h     h:::::he:::::::e                u:::::uuuu:::::u        t:::::t    tttttt i::::i  l::::l  i::::i       t:::::t    tttttt       y:::::::::y       \n" +
                                                                                        "      TT:::::::TT       h:::::h     h:::::he::::::::e               u:::::::::::::::uu      t::::::tttt:::::ti::::::il::::::li::::::i      t::::::tttt:::::t        y:::::::y        \n" +
                                                                                        "      T:::::::::T       h:::::h     h:::::h e::::::::eeeeeeee        u:::::::::::::::u      tt::::::::::::::ti::::::il::::::li::::::i      tt::::::::::::::t         y:::::y         \n" +
                                                                                        "      T:::::::::T       h:::::h     h:::::h  ee:::::::::::::e         uu::::::::uu:::u        tt:::::::::::tti::::::il::::::li::::::i        tt:::::::::::tt        y:::::y          \n" +
                                                                                        "      TTTTTTTTTTT       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee           uuuuuuuu  uuuu          ttttttttttt  iiiiiiiilllllllliiiiiiii          ttttttttttt         y:::::y           \n" +
                                                                                        "                                                                                                                                                                  y:::::y            \n"
                                                                                }),
                                                                            ]
                                                                        })]
                                                                    })]
                                                                })
                                                            }),
                                                            (0, o.jsxs)("div", {
                                                                className: "body__row",
                                                                children: [

                                                                    (0, o.jsx)("span", {
                                                                        className: "body__row-result",
                                                                        children: "Aifee promotes new coins on X like McAfee did, acting as a \"KOL\" and earning through partnerships. It shares profits with token holders or buyback and burns tokens to increase value, echoing McAfee's focus on community and decentralization."
                                                                    }),
                                                                ]
                                                            }),
                                                        ]
                                                    }),
                                                ]
                                            }),
                                        }),
                                    ]
                                }),
                            }),
                            (0, o.jsx)("div", {
                                className: s().alts, children: (0, o.jsxs)("div", {
                                    className: s().photoShoot,
                                    children: [(0, o.jsxs)("div", {
                                        className: s().photoShootParent,
                                        children: [(0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot1.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot2.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot3.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot4.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot5.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot6.jpg"
                                        }), (0, o.jsx)("img", {
                                            className: s().photoShootChild,
                                            src: "./shoot7.jpg"
                                        })
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
            main: "Home_main__2uIek",
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