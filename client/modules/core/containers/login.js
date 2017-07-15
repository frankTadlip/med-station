import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
    const {Meteor, Collections} = context();

    const adminAccount = {
        username: 'admin',
        password: 'abcdE123'
    };

    onData(null, { adminAccount });
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
