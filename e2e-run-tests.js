const cypress = require("cypress");
const fs = require("fs");
const path = require("path");

cypress.run().then(({ runs, totalDuration }) => {
  const testReportDir = path.resolve(`${__dirname}/test-report`);

  if (!fs.existsSync(testReportDir)) {
    fs.mkdirSync(testReportDir);
  }

  const testResults = runs.map((run) => {
    const tests = run.tests.map((test) => ({
      title: test.title,
      state: test.state,
      duration: test.duration,
    }));

    const totalTests = tests.length;
    const totalPassed = tests.filter((test) => test.state === "passed").length;
    const totalFailed = tests.filter((test) => test.state === "failed").length;
    const totalSkipped = tests.filter(
      (test) => test.state === "skipped"
    ).length;
    const totalDuration =
      tests.reduce((acc, test) => acc + test.duration, 0) / 1000; // Duration in seconds

    const passPercentage = ((totalPassed / totalTests) * 100).toFixed(2);
    const failPercentage = ((totalFailed / totalTests) * 100).toFixed(2);

    return {
      totalTests,
      totalPassed,
      totalFailed,
      totalSkipped,
      totalDuration: `${totalDuration} seconds`,
      passPercentage: `${passPercentage}%`,
      failPercentage: `${failPercentage}%`,
      tests,
    };
  });

  const testResultsFile = `${testReportDir}/testResults.json`;

  fs.writeFile(testResultsFile, JSON.stringify(testResults, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`\nTest report available at: ${testResultsFile}\n`);

      const filePath = path.join(__dirname, "test-results.html");

      // Conteúdo do arquivo HTML
      const htmlContent = `
     
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Test Results</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    th,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
    }
   
    tr:hover {
      background-color: #f1f1f1;
    }

    /* Cores para a porcentagem de falha */
    .red {
      color: red;
    }
    .yellow {
      color: orange;
    }
    .green {
      color: green;
    }
    .pending td {
      color: gray;
    }
    .passed {
      background-color: #c8e6c9; /* Cor de fundo para os testes passed */
    }
    .failed {
      background-color: #ffcdd2; /* Cor de fundo para os testes failed */
    }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Total Tests</th>
        <th>Total Passed</th>
        <th>Total Failed</th>
        <th>Total Skipped</th>
        <th>Total Duration</th>
        <th>Pass Percentage</th>
        <th>Fail Percentage</th>
        <th>Test Title</th>
        <th>Test State</th>
        <th>Test Duration</th>
      </tr>
    </thead>
    <tbody id="testData"></tbody>
  </table>

  <div style="width: 400px; margin: auto">
    <canvas id="pieChart" width="400" height="400"></canvas>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const jsonData   = ${JSON.stringify(testResults, null, 2)};
    const testData = document.getElementById("testData");
    function createTestRow(item, test) {
      const row = document.createElement("tr");
      row.innerHTML = \`
                <td>\${item.totalTests}</td>
                <td>\${item.totalPassed}</td>
                <td>\${item.totalFailed}</td>
                <td>\${item.totalSkipped}</td>
                <td>\${item.totalDuration}</td>
                <td>\${item.passPercentage}</td>
                <td>\${item.failPercentage}</td>
                <td>\${test.title.join('<br>')}</td>
                <td>\${test.state}</td>
                <td>\${(test.duration / 1000).toFixed(3)} seconds</td>
              \`;
              if (test.state === "pending") {
                row.classList.add("pending");
              } else if (test.state === "passed") {
                row.classList.add("passed");
              } else if (test.state === "failed") {
                row.classList.add("failed");
              }
              return row;
            }
        
            // Loop pelos dados JSON
            jsonData.forEach((item) => {
              item.tests.forEach((test, index) => {
                const testRow = createTestRow(item, test);
                testData.appendChild(testRow);
              });
            });
        
            // Cálculos para o gráfico de pizza
            const totalPassed = jsonData.reduce(
              (acc, item) => acc + item.totalPassed,
              0
            );
            const totalFailed = jsonData.reduce(
              (acc, item) => acc + item.totalFailed,
              0
            );
            const totalSkipped = jsonData.reduce(
              (acc, item) => acc + item.totalSkipped,
              0
            );
        
            const totalPending = jsonData.filter(
              (item) => item.tests.some((test) => test.state === "pending")
            ).length;
            const totalSkippedAdjusted = totalSkipped + totalPending;
        
            // Criação do gráfico de pizza
            const ctx = document.getElementById("pieChart").getContext("2d");
            const myPieChart = new Chart(ctx, {
              type: "pie",
              data: {
                labels: ["Passed", "Failed", "Skipped"],
                datasets: [
                  {
                    data: [totalPassed, totalFailed, totalSkippedAdjusted],
                    backgroundColor: ["#28a745", "#dc3545", "#8e9185"],
                  },
                ],
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Test Results Distribution",
                },
              },
            });
          </script>
        </body>
        </html>
;`;

      // Escrever o conteúdo no arquivo HTML
      fs.writeFile(filePath, htmlContent, (err) => {
        if (err) {
          console.error("Erro ao criar o arquivo HTML:", err);
        } else {
          console.log(`Arquivo HTML criado em: ${filePath}`);
        }
      });
    }
  });
});
