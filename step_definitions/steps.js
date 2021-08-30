const { I } = inject();

Given("я перехожу на страницу {string}", (page) => {
  I.amOnPage(page);
});

When("я ввожу {string} в поле {string}", (text, fieldName) => {
  I.fillField({ name: fieldName }, text);
});

When("я нажимаю на кнопку {string}", (buttonId) => {
  I.click({ id: buttonId });
});

Then("я перехожу на главную страницу {string}", (page) => {
  I.wait(2);
  I.amOnPage(page);
});
