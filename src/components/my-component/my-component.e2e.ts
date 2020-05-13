import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {

  const mockUrl = 'http://foo';
  const mockResponse = { foo: 'bar' };

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setRequestInterception(true);

    page.on('request', (request) => {

      if (request.url() === mockUrl) {
        request.respond({
          body: JSON.stringify(mockResponse)
        })
      }

      request.continue();
    });

    await page.setContent(`<my-component url="${mockUrl}"></my-component>`);
    const element = await page.find('my-component');

    page.waitForChanges();

    expect(element.textContent).toBe(JSON.stringify(mockResponse))
  });

});
