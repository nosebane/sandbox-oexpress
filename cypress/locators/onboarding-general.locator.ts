export class OnboardingGeneralLocator {
  // onboarding page 1
  get namaTokoField() {
    return cy.get("input[name='store_name']", { timeout: 5000 });
  }

  get namaOwnerField() {
    return cy.get("input[name='name']");
  }

  get phoneField() {
    return cy.get("input[name='phone']");
  }

  get alamatField() {
    return cy.get("input[name='pickup_address']");
  }

  get lokasiField() {
    return cy.get("div[role='combobox']  input");
  }

  get selanjutnyaButton() {
    return cy.get(".flex button[type='submit']");
  }

  // onboarding page 2
  get alamatTokoSebagaiPickupChecklist() {
    return cy.get("#store-address");
  }

  get fotoTokoUpload() {
    return cy.get("input[name='file']");
  }

  // onboarding page 3
  get bankOption() {
    return cy.get(".form-label").contains("Bank", { timeout: 5000 }).next("div > div");
  }

  get bankOptionList() {
    return cy.get(".multiselect__option > span");
  }

  get nomorRekeningField() {
    return cy.get("input[name='account_number']");
  }

  get namaRekeningField() {
    return cy.get("input[name='account_name']");
  }

  get bukuTabunganUpload() {
    return cy.get("input[name='file']");
  }

  // onboarding page 4
  get fotoKTPUpload() {
    return cy.get("input[name='file']");
  }

  get NIKField() {
    return cy.get(".oex-input").first();
  }

  get kodeKuponField() {
    return cy.get("input[placeholder='Masukkan kode kupon...']");
  }
}
