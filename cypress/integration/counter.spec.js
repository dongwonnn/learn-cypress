describe("example counter app", () => {
  beforeEach(() => {
    // test할 페이지 방문
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("최초의 카운터 값을 0으로 보여준다.", () => {
    // cy.get을 이용해 query selector 처럼 사용, invoke를 이용해 text 값 가져오고 should eq를 이용해 값을 비교한다.
    cy.get("#value").invoke("text").should("eq", "1");
  });
});
