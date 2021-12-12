// - [] counter의 초기값은 0이다.
// - [] + 버튼을 클릭 시 counter가 1증가한다.
// - [] + 버튼을 클릭 시 counter가 1감소한다.
// - [] + 버튼을 눌렀을 때 counter가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [] - 버튼을 눌렀을 때 counter가 0보다 작아지는 경우 더이상 감소하지 못한다. (Min 값이 0)
// - [] reset 버튼을 누르면 counter가 0으로 초기화된다.

describe("카운터 앱 테스트", () => {
  beforeEach(() => {
    // test할 페이지 방문
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("counter의 초기값은 0이다.", () => {
    // cy.get을 이용해 query selector 처럼 사용, invoke를 이용해 text 값 가져오고 should eq를 이용해 값을 비교한다.
    cy.get("#value").invoke("text").should("eq", "0");
  });

  it("+ 버튼을 클릭 시 counter가 1증가한다.", () => {
    cy.get("#value")
      // 먼저 기존 값을 가져오고
      .invoke("text")
      .then((value) => {
        const preValue = Number(value);
        // + 버튼을 클릭한 다음에
        cy.get(".increase-btn").click();
        // 변화된 값이 기존값의 +1인지 체크
        cy.get("#value")
          .invoke("text")
          .should("eq", String(preValue + 1));
      });
  });
});
