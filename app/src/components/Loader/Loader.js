import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	progress: {
		margin: theme.spacing(2),
		marginLeft: '50%',
		marginTop: '30vh',
	},
}));

export default function CircularIndeterminate() {
	const classes = useStyles();

	return (
		<div style={{ margin: 'auto', top: '50' }}>
			<CircularProgress className={classes.progress} />
		</div>
	);
}
