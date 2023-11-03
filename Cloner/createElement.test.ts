import Cloner from './index';
import { describe, test, expect } from 'vitest';

describe('createElement', () => {
  test("doesn't crash", () => {
    expect(() => Cloner.createElement('div', { id: 'div' })).not.toThrowError();
  });

  test('element has the correct type', () => {
    const el = Cloner.createElement('div', { id: 'div' });
    expect(el.type).toEqual('div');
  });

  test('element has the correct props', () => {
    const props = {
      id: 'div',
      name: 'dummy_div',
      count: 0,
    };
    const el = Cloner.createElement('div', props);

    expect(el.props).toMatchObject(props);
  });

  test('element has the correct children count', () => {
    const el = Cloner.createElement('div', {});
    const e2 = Cloner.createElement('div', {});
    const e3 = Cloner.createElement('div', {});
    const e4 = Cloner.createElement('div', {}, 'hehe', el, e2, e3);

    expect(e4.props.children).toHaveLength(4);
  });

  test('creates textElement from string children', () => {
    const el = Cloner.createElement('h1', {}, 'hehe');
    const textEl = {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: 'hehe',
        children: [],
      },
    };
    expect(el.props.children[0]).toStrictEqual(textEl);
  });
});
