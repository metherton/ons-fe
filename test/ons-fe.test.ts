import { html, fixture, expect } from '@open-wc/testing';

import {OnsFe} from '../src/OnsFe.js';
import '../src/ons-fe.js';

describe('OnsFe', () => {
  let element: OnsFe;
  beforeEach(async () => {
    element = await fixture(html`
      <ons-fe></ons-fe>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
    expect(true).to.equal(true);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
