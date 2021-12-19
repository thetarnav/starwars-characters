import { mount } from '@vue/test-utils'
import ListTableVue from '../src/components/ListTable.vue'
import SkeletonVue from '../src/components/Skeleton.vue'
import { snakeToTitle } from '../src/logic/utils'

describe('Skeleton.vue', () => {
	test("Shows skeleton loader when condition isn't met", () => {
		const wrapper = mount(SkeletonVue, {
			props: {
				when: false,
			},
			slots: {
				default: '<div data-test="content">HELLO</div>',
			},
		})

		expect(wrapper.find('[data-test="skeleton"]').isVisible()).toBe(true)
		expect(
			Object.getOwnPropertyNames(wrapper.find('[data-test="content"]'))
				.length,
		).toBe(0)
	})

	test('Shows content when condition is met', () => {
		const wrapper = mount(SkeletonVue, {
			props: {
				when: true,
			},
			slots: {
				default: '<div data-test="content">HELLO</div>',
			},
		})
		expect(
			Object.getOwnPropertyNames(wrapper.find('[data-test="skeleton"]'))
				.length,
		).toBe(0)
		expect(wrapper.find('[data-test="content"]').isVisible()).toBe(true)
	})
})

describe('ListTable.vue', () => {
	test('displays record as table', () => {
		const data = {
			foo: 'unknown',
			bar: 123456,
			baz: ['123'],
			other: undefined,
		}
		const wrapper = mount(ListTableVue, {
			props: { data },
		})
		const ths = wrapper.findAll('th')
		expect(ths.length).toBe(4)
		ths.forEach((th, i) => {
			expect(th.text()).toBe(snakeToTitle(Object.keys(data)[i]))
		})
		const tds = wrapper.findAll('td')
		expect(tds.length).toBe(4)
		expect(tds[0].text()).toBe('unknown')
		expect(tds[1].text()).toBe('123456')
		expect(tds[2].text()).toBe(`[\n  "123"\n]`)
		expect(tds[3].text()).toBe('')
	})
})
