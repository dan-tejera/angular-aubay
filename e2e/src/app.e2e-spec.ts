import { HomePage } from './home.po';
import { browser, logging } from 'protractor';
import { TareasPage } from './tareas.po';

describe('workspace-project App Home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Curso Angular Aubay');
  });

  it('should display in the footer the autor name', () => {
    page.navigateTo();
    let autor = 'Daniel Tejera';
    expect(page.getFooterText()).toContain(autor);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('workspace-project App Tareas', () => {
  let page: TareasPage;

  beforeEach(() => {
    page = new TareasPage();
  });

  it('should display titulo h2', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Tareas');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
