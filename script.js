document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input[type='text']");
    const formulas = document.querySelectorAll("formula");
    function calculateFormula(formula) {
        try {
            let expression = formula.getAttribute("evaluator");
            inputs.forEach(input => {
                const id = input.id;
                const value = parseFloat(input.value) || 0;
                const regex = new RegExp(`\\b${id}\\b`, "g");
                expression = expression.replace(regex, value);
            });
            const result = eval(expression);
            formula.textContent = isNaN(result) ? "Invalid Formula" : result;
        } catch (error) {
            formula.textContent = "Invalid Formula";
        }
    }
    function updateFormulas() {
        formulas.forEach(calculateFormula);
    }
    inputs.forEach(input => {
        input.addEventListener("input", updateFormulas);
    });
    updateFormulas();
});
