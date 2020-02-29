import React from 'react';
import renderer from 'react-test-renderer'
import Search from './search';

test('Something', () => {
    const search = {}
    const component = renderer.create(
        <Search search={search}></Search>
    )
})