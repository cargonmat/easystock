(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    168: function(e, t, a) {
      e.exports = a(196);
    },
    174: function(e, t, a) {},
    196: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(4),
        r = a.n(n),
        s = a(132),
        l = a.n(s),
        c = a(43),
        o = a(55),
        u = a(58),
        i = a(56),
        m = a(59),
        h = (a(173), a(174), a(90)),
        d = a(83),
        p = a(74),
        g = a(133),
        E = a.n(g),
        b = function e() {
          var t = this;
          Object(c.a)(this, e),
            (this.signup = function(e) {
              var a = e.username,
                n = e.password;
              return t.service
                .post("/signup", { username: a, password: n })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.login = function(e) {
              var a = e.username,
                n = e.password;
              return t.service
                .post("/login", { username: a, password: n })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.logout = function() {
              return t.service.post("/logout").then(function(e) {
                return e.data;
              });
            }),
            (this.loggedin = function() {
              return t.service.get("/loggedin").then(function(e) {
                return e.data;
              });
            }),
            (this.buyshares = function(e, a) {
              return t.service
                .post("/buyshares", { cash: e, shares: a })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.sellshares = function(e, a) {
              return t.service
                .post("/sellshares", { cash: e, shares: a })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.service = E.a.create({
              baseURL: "".concat(
                "https://Easystock00.herokuapp.com/api",
                "/auth"
              ),
              withCredentials: !0
            }));
        },
        v = a(62),
        f = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).logout = function() {
                a.authservices
                  .logout()
                  .then(function(e) {
                    a.props.setTheUser(!1);
                  })
                  .catch(function(e) {
                    return console.log(e);
                  });
              }),
              (a.state = {}),
              (a.authservices = new b()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.loggedInUser
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        "Hola, ",
                        this.props.loggedInUser.username
                      )
                    : r.a.createElement(r.a.Fragment, null, "Hola, invitad@");
                  return this.props.loggedInUser
                    ? r.a.createElement(
                        d.a,
                        { bg: "dark", expand: "lg", variant: "dark" },
                        r.a.createElement(
                          d.a.Brand,
                          { href: "#home" },
                          "Easystock"
                        ),
                        r.a.createElement(d.a.Toggle, {
                          "aria-controls": "basic-navbar-nav"
                        }),
                        r.a.createElement(
                          d.a.Collapse,
                          { id: "basic-navbar-nav" },
                          r.a.createElement(
                            p.a,
                            { className: "ml-auto" },
                            r.a.createElement(
                              p.a.Link,
                              { as: "div" },
                              r.a.createElement(
                                v.b,
                                { to: "/", className: "noDetail" },
                                "Inicio"
                              )
                            ),
                            r.a.createElement(
                              p.a.Link,
                              { as: "div" },
                              r.a.createElement(
                                v.b,
                                { to: "/profile", className: "noDetail" },
                                "Perfil"
                              )
                            ),
                            r.a.createElement(
                              p.a.Link,
                              { onClick: this.logout },
                              "Cerrar sesi\xf3n"
                            ),
                            r.a.createElement(p.a.Link, { as: "small" }, e)
                          )
                        )
                      )
                    : r.a.createElement(
                        d.a,
                        { bg: "dark", expand: "lg", variant: "dark" },
                        r.a.createElement(
                          d.a.Brand,
                          { href: "/" },
                          "Easystock"
                        ),
                        r.a.createElement(d.a.Toggle, {
                          "aria-controls": "basic-navbar-nav"
                        }),
                        r.a.createElement(
                          d.a.Collapse,
                          { id: "basic-navbar-nav" },
                          r.a.createElement(
                            p.a,
                            { className: "ml-auto" },
                            r.a.createElement(
                              p.a.Link,
                              { as: "div" },
                              r.a.createElement(
                                v.b,
                                { to: "/", className: "noDetail" },
                                "Inicio"
                              )
                            ),
                            r.a.createElement(
                              p.a.Link,
                              { as: "div" },
                              r.a.createElement(
                                v.b,
                                { to: "/signup", className: "noDetail" },
                                "Registro"
                              )
                            ),
                            r.a.createElement(
                              p.a.Link,
                              { as: "div" },
                              r.a.createElement(
                                v.b,
                                { to: "/login", className: "noDetail" },
                                "Inicio sesi\xf3n"
                              )
                            ),
                            r.a.createElement(p.a.Link, { as: "small" }, e)
                          )
                        )
                      );
                }
              }
            ]),
            t
          );
        })(n.Component),
        y = a(136),
        U = a(31),
        j = a(73),
        O = a(88),
        k = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).handleChange = function(e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(y.a)({}, n, r));
              }),
              (a.postUser = function() {
                a.authservices
                  .signup(a.state)
                  .then(function(e) {
                    a.setState({ username: "", password: "" }),
                      a.props.setTheUser(e);
                  })
                  .catch(function(e) {
                    return console.log({ err: e });
                  });
              }),
              (a.handleSubmit = function(e) {
                e.preventDefault(), a.postUser();
              }),
              (a.state = { username: "", password: "" }),
              (a.authservices = new b()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement("h1", null, "Registro de usuarios"),
                    r.a.createElement(
                      U.a,
                      { onSubmit: this.handleSubmit },
                      r.a.createElement(
                        U.a.Group,
                        null,
                        r.a.createElement(U.a.Label, null, "Usuario"),
                        r.a.createElement(U.a.Control, {
                          type: "text",
                          name: "username",
                          value: this.state.username,
                          onChange: this.handleChange
                        })
                      ),
                      r.a.createElement(
                        U.a.Group,
                        null,
                        r.a.createElement(U.a.Label, null, "Contrase\xf1a"),
                        r.a.createElement(U.a.Control, {
                          type: "password",
                          name: "password",
                          value: this.state.password,
                          onChange: this.handleChange
                        })
                      ),
                      r.a.createElement(
                        j.a,
                        { variant: "dark", type: "submit" },
                        "Registrarse"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        C = function(e) {
          return r.a.createElement(
            "tbody",
            null,
            r.a.createElement(
              "tr",
              { className: "content" },
              r.a.createElement("td", null, e["2. name"]),
              r.a.createElement("td", null, e["1. symbol"]),
              r.a.createElement(
                "td",
                null,
                r.a.createElement(
                  v.b,
                  {
                    to: "/details/".concat(e["1. symbol"]),
                    className: "black"
                  },
                  "detalles"
                )
              )
            )
          );
        },
        S = function(e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "tbody",
              { className: "media" },
              r.a.createElement(
                "tr",
                { className: "content" },
                r.a.createElement("td", null, "Nombre: ", e.company, ",")
              ),
              r.a.createElement(
                "tr",
                { className: "content" },
                r.a.createElement("td", null, "Acciones: ", e.shares, ",")
              ),
              r.a.createElement(
                "tr",
                { className: "content" },
                r.a.createElement(
                  "td",
                  null,
                  "Precio de compra: ",
                  e.actualvalue,
                  " USD."
                )
              ),
              r.a.createElement(
                "tr",
                { className: "content" },
                r.a.createElement(
                  "td",
                  null,
                  r.a.createElement(
                    v.b,
                    { to: "/details/".concat(e.company), className: "black" },
                    "Realizar transacciones"
                  )
                )
              )
            )
          );
        },
        w = function(e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "thead",
              null,
              r.a.createElement(
                "tr",
                null,
                r.a.createElement("th", null, "Nombre: ", e.company)
              )
            ),
            r.a.createElement(
              "tbody",
              null,
              r.a.createElement(
                "tr",
                { className: "content" },
                r.a.createElement(
                  "td",
                  null,
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement(
                      "li",
                      null,
                      "Valor actual: ",
                      e.value,
                      " USD."
                    ),
                    r.a.createElement(
                      "li",
                      { style: { color: e.growth >= 0 ? "green" : "red" } },
                      "Crecimiento: ",
                      e.growth.toFixed(4),
                      "%."
                    )
                  )
                )
              )
            )
          );
        },
        I = a(52),
        N = a(63),
        D = function e() {
          var t = this;
          Object(c.a)(this, e),
            (this.search = function(e) {
              return t.service.post("/search", { query: e }).then(function(e) {
                return e.data;
              });
            }),
            (this.daily = function(e) {
              return t.service.post("/daily", { symbol: e }).then(function(e) {
                return e.data;
              });
            }),
            (this.weekly = function(e) {
              return t.service.post("/weekly", { symbol: e }).then(function(e) {
                return e.data;
              });
            }),
            (this.monthly = function(e) {
              return t.service
                .post("/monthly", { symbol: e })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.intraday = function(e, a) {
              return t.service
                .post("/intraday", { symbol: e, interval: a })
                .then(function(e) {
                  return e.data;
                });
            }),
            (this.latest = function(e) {
              var a = e.symbol;
              return t.service
                .post("/latest", { symbol: a })
                .then(function(e) {
                  return e.data;
                })
                .catch(function(e) {
                  return console.log(e);
                });
            }),
            (this.service = E.a.create({
              baseURL: "".concat(
                "https://Easystock00.herokuapp.com/api",
                "/trading"
              )
            }));
        },
        T = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).handleChange = function(e) {
                return a.setState({ searchBar: e.target.value });
              }),
              (a.addData = function(e) {
                e.preventDefault(),
                  a.tradingservices
                    .search(a.state.searchBar)
                    .then(function(e) {
                      a.setState({ data: e });
                    })
                    .catch(function(e) {
                      return console.log(e);
                    });
              }),
              (a.state = {
                data: [],
                listComp: [],
                searchBar: "",
                actualValue: []
              }),
              (a.tradingservices = new D()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  for (
                    var e = this,
                      t = function(t) {
                        e.tradingservices
                          .daily(e.props.loggedInUser.shares[t].company)
                          .then(function(a) {
                            var n = Object.values(a).map(function(e) {
                                return Number(e["4. close"]);
                              }),
                              r = {
                                company: e.props.loggedInUser.shares[t].company,
                                value: n[0],
                                growth:
                                  (n[0] -
                                    e.props.loggedInUser.shares[t]
                                      .actualvalue) /
                                  100
                              },
                              s = e.state.actualValue;
                            s.push(r),
                              e.setState({ actualValue: s }),
                              console.log(s);
                          })
                          .catch(function(e) {
                            return console.log(e);
                          });
                      },
                      a = 0;
                    a < this.props.loggedInUser.shares.length;
                    a++
                  )
                    t(a);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.loggedInUser.cash
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
                    t = (
                      (this.props.loggedInUser.cash.toFixed(4) - 1e5) /
                      100
                    ).toFixed(2),
                    a = (this.props.loggedInUser.cash.toFixed(4) - 1e5).toFixed(
                      2
                    );
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement(
                      I.a,
                      null,
                      r.a.createElement(
                        "h1",
                        null,
                        "Bienvenido ",
                        this.props.loggedInUser.username
                      )
                    ),
                    r.a.createElement(
                      I.a,
                      null,
                      r.a.createElement(
                        N.a,
                        null,
                        r.a.createElement(
                          I.a,
                          null,
                          r.a.createElement(
                            "p",
                            null,
                            "Tus ahorros: ",
                            e,
                            " USD"
                          )
                        ),
                        r.a.createElement(
                          I.a,
                          null,
                          r.a.createElement(
                            U.a,
                            { onSubmit: this.addData },
                            r.a.createElement(
                              U.a.Group,
                              null,
                              r.a.createElement(U.a.Label, null, "Empresas"),
                              r.a.createElement(U.a.Control, {
                                type: "text",
                                name: "searchBar",
                                value: this.state.searchBar,
                                onChange: this.handleChange
                              })
                            ),
                            r.a.createElement(
                              j.a,
                              { variant: "dark", type: "submit" },
                              "Buscar"
                            )
                          )
                        ),
                        r.a.createElement(
                          I.a,
                          null,
                          r.a.createElement(
                            "table",
                            null,
                            this.state.data.map(function(e, t) {
                              return r.a.createElement(
                                C,
                                Object.assign({ key: t }, e)
                              );
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        N.a,
                        null,
                        r.a.createElement(
                          "table",
                          null,
                          this.props.loggedInUser.shares.map(function(e, t) {
                            return r.a.createElement(
                              S,
                              Object.assign({ key: t }, e)
                            );
                          })
                        )
                      )
                    ),
                    r.a.createElement("hr", null),
                    r.a.createElement(
                      I.a,
                      null,
                      r.a.createElement("p", null, "Crecimiento actual: "),
                      r.a.createElement(
                        "p",
                        { style: { color: t >= 0 ? "green" : "red" } },
                        t,
                        "%"
                      )
                    ),
                    r.a.createElement(
                      I.a,
                      null,
                      r.a.createElement("p", null, "Beneficio actual: "),
                      r.a.createElement(
                        "p",
                        { style: { color: a >= 0 ? "green" : "red" } },
                        a,
                        " USD"
                      )
                    ),
                    r.a.createElement(
                      I.a,
                      null,
                      r.a.createElement(
                        N.a,
                        null,
                        r.a.createElement(
                          "table",
                          null,
                          this.state.actualValue.map(function(e, t) {
                            return r.a.createElement(
                              w,
                              Object.assign({ key: t }, e)
                            );
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        x = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).handleChange = function(e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(y.a)({}, n, r));
              }),
              (a.postUser = function() {
                a.authservices
                  .login(a.state)
                  .then(function(e) {
                    a.setState({ username: "", password: "" }),
                      a.props.setTheUser(e),
                      a.props.history.push("/");
                  })
                  .catch(function(e) {
                    return console.log({ err: e });
                  });
              }),
              (a.handleSubmit = function(e) {
                e.preventDefault(), a.postUser();
              }),
              (a.state = { username: "", password: "" }),
              (a.authservices = new b()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement("h1", null, "Inicio de sesi\xf3n"),
                    r.a.createElement(
                      U.a,
                      { onSubmit: this.handleSubmit },
                      r.a.createElement(
                        U.a.Group,
                        null,
                        r.a.createElement(U.a.Label, null, "Usuario"),
                        r.a.createElement(U.a.Control, {
                          type: "text",
                          name: "username",
                          value: this.state.username,
                          onChange: this.handleChange
                        })
                      ),
                      r.a.createElement(
                        U.a.Group,
                        null,
                        r.a.createElement(U.a.Label, null, "Contrase\xf1a"),
                        r.a.createElement(U.a.Control, {
                          type: "password",
                          name: "password",
                          value: this.state.password,
                          onChange: this.handleChange
                        })
                      ),
                      r.a.createElement(
                        j.a,
                        { variant: "dark", type: "submit" },
                        "Iniciar sesi\xf3n"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        L = a(142),
        B = function() {
          return r.a.createElement(
            N.a,
            { md: 4 },
            r.a.createElement(
              L.a,
              { className: "card-rusa" },
              r.a.createElement(
                L.a.Body,
                null,
                r.a.createElement(L.a.Title, null, "hello"),
                r.a.createElement("hr", null),
                r.a.createElement(j.a, {
                  as: "div",
                  variant: "dark",
                  size: "sm"
                })
              )
            )
          );
        },
        F = a(147),
        V = a(98),
        q = a(165),
        A = a(164);
      F.b(q.a);
      var G = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(this, Object(i.a)(t).call(this, e))).state = {
                data: [],
                chart: null,
                ready: !1
              }),
              (a.tradingservices = new D()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.setState({ chart: F.a("chartdiv", V.d) }),
                    this.tradingservices
                      .daily(this.props.match.params.symbol)
                      .then(function(t) {
                        for (
                          var a = Object.values(t),
                            n = Object.keys(t),
                            r = a.map(function(e) {
                              return Number(e["4. close"]);
                            }),
                            s = [],
                            l = 1;
                          l < r.length;
                          l++
                        )
                          s.push({
                            date: new Date(n[0 + l]),
                            name: "name" + l,
                            value: r[l]
                          }),
                            e.setState({ data: s });
                        (e.state.chart.data = e.state.data),
                          (e.state.chart.xAxes.push(
                            new V.a()
                          ).renderer.grid.template.location = 0);
                        var c = e.state.chart.yAxes.push(new V.c());
                        (c.tooltip.disabled = !0), (c.renderer.minWidth = 35);
                        var o = e.state.chart.series.push(new V.b());
                        (o.dataFields.dateX = "date"),
                          (o.dataFields.valueY = "value"),
                          (o.tooltipText = "{valueY.value}"),
                          (e.state.chart.cursor = new V.f());
                        var u = new V.e();
                        u.series.push(o),
                          (e.state.chart.scrollbarX = u),
                          (e.chart = e.state.chart),
                          e.setState({ ready: !0 });
                      })
                      .catch(function(e) {
                        return console.log(e);
                      });
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(A.a, {
                      animation: "border",
                      style: {
                        marginLeft: 500,
                        marginTop: 200,
                        marginBottom: 200,
                        display: this.state.ready ? "none" : "inherit"
                      }
                    }),
                    r.a.createElement(I.a, {
                      as: "div",
                      id: "chartdiv",
                      style: {
                        width: "100%",
                        height: "500px",
                        display: this.state.ready ? "inherit" : "none"
                      }
                    })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        R = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).handleChange = function(e) {
                return a.setState({ quantity: e.target.value });
              }),
              (a.buyShares = function(e) {
                e.preventDefault();
                var t = (a.state.numCash -=
                    Number(a.state.quantity) * a.state.actualValue),
                  n = {
                    company: a.props.match.params.symbol,
                    shares: Number(a.state.quantity),
                    actualvalue: a.state.actualValue
                  };
                a.authservices.buyshares(t, n).then(function(e) {
                  a.props.setTheUser(e);
                }),
                  a.setState({ cash: t });
              }),
              (a.sellShares = function(e) {
                e.preventDefault();
                var t = (a.state.numCash +=
                    Number(a.state.quantity) * a.state.actualValue),
                  n = {
                    company: a.props.match.params.symbol,
                    shares: a.state.quantity,
                    actualvalue: a.state.actualValue
                  };
                a.authservices.sellshares(t, n).then(function(e) {
                  a.props.setTheUser(e);
                }),
                  a.setState({ cash: t }),
                  console.log(t);
              }),
              (a.state = {
                quantity: 0,
                numCash: a.props.loggedInUser.cash,
                cash: a.props.loggedInUser.cash
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
                actualValue: 0,
                loggedInUser: !0
              }),
              (a.tradingservices = new D()),
              (a.authservices = new b()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.tradingservices
                    .daily(this.props.match.params.symbol)
                    .then(function(t) {
                      var a = Object.values(t).map(function(e) {
                        return Number(e["4. close"]);
                      });
                      e.setState({ actualValue: a[0] });
                    })
                    .catch(function(e) {
                      return console.log(e);
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.chart && this.chart.dispose();
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.cash &&
                      r.a.createElement(
                        O.a,
                        null,
                        r.a.createElement("h1", null, "Trading data"),
                        r.a.createElement(
                          "h3",
                          null,
                          this.props.match.params.symbol
                        ),
                        r.a.createElement(G, this.props),
                        r.a.createElement(
                          I.a,
                          null,
                          r.a.createElement(
                            N.a,
                            null,
                            " ",
                            r.a.createElement(
                              "p",
                              null,
                              "Tus ahorros: ",
                              this.state.cash,
                              " USD"
                            )
                          ),
                          r.a.createElement(
                            N.a,
                            null,
                            r.a.createElement(
                              "p",
                              null,
                              "Valor actual de acciones ",
                              this.state.actualValue,
                              " USD"
                            )
                          )
                        ),
                        r.a.createElement(I.a, null, " "),
                        r.a.createElement(
                          I.a,
                          null,
                          r.a.createElement(
                            N.a,
                            null,
                            r.a.createElement(
                              U.a,
                              { onSubmit: this.buyShares },
                              r.a.createElement(
                                U.a.Group,
                                null,
                                r.a.createElement(
                                  U.a.Label,
                                  null,
                                  "Adquirir Acciones"
                                ),
                                r.a.createElement(U.a.Control, {
                                  type: "number",
                                  name: "quantity",
                                  value: this.state.quantity,
                                  onChange: this.handleChange
                                })
                              ),
                              r.a.createElement(
                                j.a,
                                { variant: "dark", type: "submit" },
                                "Comprar"
                              )
                            )
                          ),
                          r.a.createElement(
                            N.a,
                            null,
                            r.a.createElement(
                              U.a,
                              { onSubmit: this.sellShares },
                              r.a.createElement(
                                U.a.Group,
                                null,
                                r.a.createElement(
                                  U.a.Label,
                                  null,
                                  "Vender Acciones"
                                ),
                                r.a.createElement(U.a.Control, {
                                  type: "number",
                                  name: "quantity",
                                  value: this.state.quantity,
                                  onChange: this.handleChange
                                })
                              ),
                              r.a.createElement(
                                j.a,
                                { variant: "dark", type: "submit" },
                                "Vender"
                              )
                            )
                          )
                        )
                      )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        M = (function(e) {
          function t() {
            var e;
            return (
              Object(c.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(i.a)(t).call(this)
              )).componentDidUpdate = function(t, a) {
                return console.log(
                  "El estado de App se ha actualizado:",
                  e.state
                );
              }),
              (e.componentDidMount = function() {
                return e.fetchUser();
              }),
              (e.setTheUser = function(t) {
                return e.setState({ loggedInUser: t });
              }),
              (e.fetchUser = function() {
                e.authservices
                  .loggedin()
                  .then(function(t) {
                    return e.setState({ loggedInUser: t });
                  })
                  .catch(function() {
                    return e.setState({ loggedInUser: !1 });
                  });
              }),
              (e.state = { loggedInUser: !1 }),
              (e.authservices = new b()),
              e
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(f, {
                      setTheUser: this.setTheUser,
                      loggedInUser: this.state.loggedInUser
                    }),
                    r.a.createElement(
                      h.d,
                      null,
                      r.a.createElement(h.b, {
                        exact: !0,
                        path: "/",
                        render: function() {
                          return r.a.createElement(B, {
                            loggedInUser: e.state.loggedInUser
                          });
                        }
                      }),
                      r.a.createElement(h.b, {
                        path: "/signup",
                        render: function() {
                          return r.a.createElement(k, {
                            setTheUser: e.setTheUser
                          });
                        }
                      }),
                      r.a.createElement(h.b, {
                        path: "/login",
                        render: function(t) {
                          return r.a.createElement(
                            x,
                            Object.assign({ setTheUser: e.setTheUser }, t)
                          );
                        }
                      }),
                      r.a.createElement(h.b, {
                        path: "/profile",
                        render: function() {
                          return e.state.loggedInUser
                            ? r.a.createElement(T, {
                                loggedInUser: e.state.loggedInUser,
                                setTheUser: e.setTheUser
                              })
                            : r.a.createElement(h.a, { to: "/" });
                        }
                      }),
                      r.a.createElement(h.b, {
                        path: "/details/:symbol",
                        render: function(t) {
                          return e.state.loggedInUser
                            ? r.a.createElement(
                                R,
                                Object.assign(
                                  { loggedInUser: e.state.loggedInUser },
                                  t,
                                  { setTheUser: e.setTheUser }
                                )
                              )
                            : r.a.createElement(h.a, { to: "/" });
                        }
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      l.a.render(
        r.a.createElement(v.a, null, r.a.createElement(M, null)),
        document.getElementById("root")
      );
    }
  },
  [[168, 1, 3]]
]);
//# sourceMappingURL=main.13637b63.chunk.js.map
