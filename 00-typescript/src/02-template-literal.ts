// @ts-nocheck
// --------------------------------------------------------------------------
// template literal
// 개발자 경험 향상을 위하여 ts 사용

const koreanFoods: {
  caption: string;
  rows: {
    headline: string;
    content: string;
  }[];
} = {
  caption: "한식 메뉴",
  rows: [
    { headline: "뚝배기 불고기", content: "8,000원" },
    { headline: "스팸치즈볶음밥", content: "7,500원" },
    { headline: "불고기낙지덮밥", content: "9,000원" },
  ],
};

function run(): void {
  // ts는 반환형이 없으면 void 써주기
  // const rendredResult = renderTable(koreanFoods);
  let rendredResult = printTableHTML(koreanFoods);
  rendredResult = removeSpaceString(rendredResult);
  console.log(rendredResult);
  // return undefined;
  // 자스에서는 반환값이 없을 때 undefined 반환
}

function removeSpaceString(data: string): string {
  return data
    .replace(/(\s+<$|>\s+)/g, $1 => {
      if (/\s+<$/.test($1)) {
        return "<";
      } else if (/>\s+/.test($1)) {
        return ">";
      } else {
        return "";
      }
    })
    .trim();
}

function printTableHTML(data: {
  caption: string;
  rows: {
    headline: string;
    content: string;
  }[];
}): string {
  return /* html */ `
  <table class="table">
    <caption class="sr-only">${data.caption}</caption>
    ${
      // 원형을 변형시키지 않고 배열을 복사해서 사용
      data.rows
        .map(
          item =>
            `
            <tr>
              <th>${item.headline}</th>
              <td>${item.content}</td>
            </tr>
          `
        )
        .join("")
    }
      // map이 반환하는 건 배열인데 문자가 같이 병합이 되어야하므로 join 사용
    }
  </table>`;
}

function renderTable(data: {
  caption: string;
  rows: {
    headline: string;
    content: string;
  }[];
}): string {
  // data는 암묵적으로 any타입이기 떄문이 얘도 타입 명시 해주기
  return [
    '<table class="table">',
    '<caption class="sr-only">' + data.caption + "</caption>",
    data.rows.reduce(function (htmlString, rowData) {
      const rowString = [
        "<tr>",
        "<th>" + rowData.headline + "</th>",
        "<td>" + rowData.content + "</td>",
        "</tr>",
      ].join("");
      return htmlString + rowString;
    }, ""),
    "</table>",
  ].join("");
}

run();
