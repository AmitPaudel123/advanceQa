import { Page, Locator } from "@playwright/test";

export class loginPage {
  readonly page: Page;
  readonly fname: Locator;
  readonly lname: Locator;
  readonly email: Locator;
  readonly gender: Locator;
  readonly number: Locator;
  readonly dob: Locator;
  readonly picture: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fname = page.getByPlaceholder("First Name");
    this.lname = page.getByPlaceholder("Last Name");
    this.email = page.getByPlaceholder("name@example.com");
    this.gender = page.getByLabel("Male", { exact: true });
    this.number = page.getByPlaceholder("Mobile Number");
    this.dob = page.locator("#dateOfBirthInput");
    this.picture = page.locator("input[label='Select picture']");
    this.state = page.locator("#state");
    this.city = page.locator("#city");
    this.submit = page.getByRole("button", { name: "Submit", exact: true });
  }

  async uploadPic(picPath: string) {
    this.picture.setInputFiles(picPath);
  }

  async login(
    fname: string,
    lname: string,
    email: string,
    number: string,
    dob: string,
    picPath: string,
  ) {
    await this.fname.fill(fname);
    await this.lname.fill(lname);
    await this.email.fill(email);
    await this.number.fill(number);
    await this.dob.fill(dob);
    await this.gender.click();
    await this.uploadPic(picPath);
    await this.submit.click();
  }
}
