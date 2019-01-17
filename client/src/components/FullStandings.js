/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const FullStandings = (props) => {
  const { teams } = props;
  const afcEastTeams = teams.filter(team => team.division === 'AFC EAST').sort((a, b) => b.wins - a.wins);
  const afcNorthTeams = teams.filter(team => team.division === 'AFC NORTH').sort((a, b) => b.wins - a.wins);
  const afcSouthTeams = teams.filter(team => team.division === 'AFC SOUTH').sort((a, b) => b.wins - a.wins);
  const afcWestTeams = teams.filter(team => team.division === 'AFC WEST').sort((a, b) => b.wins - a.wins);
  const nfcEastTeams = teams.filter(team => team.division === 'NFC EAST').sort((a, b) => b.wins - a.wins);
  const nfcNorthTeams = teams.filter(team => team.division === 'NFC NORTH').sort((a, b) => b.wins - a.wins);
  const nfcSouthTeams = teams.filter(team => team.division === 'NFC SOUTH').sort((a, b) => b.wins - a.wins);
  const nfcWestTeams = teams.filter(team => team.division === 'NFC WEST').sort((a, b) => b.wins - a.wins);

  return (
    <div className="container-fluid">
      <h5>2018 NFL Standings</h5>
      <table className="table table-striped table-hover table-sm rounded">
        <thead>
          <tr>
            <th scope="col">Team</th>
            <th scope="col">W</th>
            <th scope="col">L</th>
            <th scope="col">T</th>
            <th scope="col">PCT</th>
            <th scope="col">PF</th>
            <th scope="col">PA</th>
            <th scope="col">DIFF</th>
          </tr>
        </thead>
        <tbody>
          <h5>AFC EAST</h5>
          {afcEastTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>AFC NORTH</h5>
          {afcNorthTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>AFC SOUTH</h5>
          {afcSouthTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>AFC WEST</h5>
          {afcWestTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>NFC EAST</h5>
          {nfcEastTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>NFC NORTH</h5>
          {nfcNorthTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>NFC SOUTH</h5>
          {nfcSouthTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
        <tbody>
          <h5>NFC WEST</h5>
          {nfcWestTeams.map(team => (
            <tr key={team._id}>
              <th scope="row">
                <img src={team.team_logo} alt="logo" />
                {' '}
                <a href={team.link}>{team.team_name}</a>
              </th>
              <th scope="row">{team.wins}</th>
              <th scope="row">{team.losses}</th>
              <th scope="row">{team.tie}</th>
              <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
              <th scope="row">{team.points_for}</th>
              <th scope="row">{team.points_against}</th>
              <th scope="row" className={(team.points_for - team.points_against > 0 ? 'text-success' : 'text-danger')}>{team.points_for - team.points_against}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullStandings;
