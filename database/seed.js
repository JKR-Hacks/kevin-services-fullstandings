const db = require('./index');
const Standings = require('./index');

const mockTeamData = [
  {
    id: 1, team_name: 'Arizona Cardinals', division: 'NFC WEST', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 379, points_against: 399, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ari.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/ari/arizona-cardinals',
  },
  {
    id: 2, team_name: 'Atlanta Falcons', division: 'NFC SOUTH', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 381, points_against: 404, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/atl.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/atl/atlanta-falcons',
  },
  {
    id: 3, team_name: 'Baltimore Ravens', division: 'AFC NORTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 341, points_against: 293, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/bal.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/bal/baltimore-ravens',
  },
  {
    id: 4, team_name: 'Buffalo Bills', division: 'AFC EAST', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 288, points_against: 428, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/buf.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/buf/buffalo-bills',
  },
  {
    id: 5, team_name: 'Carolina Panthers', division: 'NFC SOUTH', wins: 9, losses: 7, tie: 0, percentage: 0.562, points_for: 424, points_against: 430, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/car.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/car/carolina-panthers',
  },
  {
    id: 6, team_name: 'Chicago Bears', division: 'NFC NORTH', wins: 13, losses: 3, tie: 0, percentage: 0.812, points_for: 445, points_against: 381, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/chi.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/chi/chicago-bears',
  },
  {
    id: 7, team_name: 'Cincinnati Bengals', division: 'AFC NORTH', wins: 9, losses: 7, tie: 1, percentage: 0.562, points_for: 488, points_against: 461, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cin.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/cin/cincinnati-bengals',
  },
  {
    id: 8, team_name: 'Cleveland Browns', division: 'AFC NORTH', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 399, points_against: 372, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cle.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/cle/cleveland-browns',
  },
  {
    id: 9, team_name: 'Dallas Cowboys', division: 'NFC EAST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 511, points_against: 465, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/dal.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/dal/dallas-cowboys',
  },
  {
    id: 10, team_name: 'Denver Broncos', division: 'AFC WEST', wins: 8, losses: 7, tie: 1, percentage: 0.531, points_for: 476, points_against: 479, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/den.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/den/denver-broncos',
  },
  {
    id: 11, team_name: 'Detroit Lions', division: 'NFC NORTH', wins: 14, losses: 2, tie: 0, percentage: 0.875, points_for: 563, points_against: 505, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/det.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/det/detroit-lions',
  },
  {
    id: 12, team_name: 'Green Bay Packers', division: 'NFC NORTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 577, points_against: 515, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/gb.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/gb/green-bay-packers',
  },
  {
    id: 13, team_name: 'Houston Texans', division: 'AFC SOUTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 573, points_against: 489, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/hou.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/hou/houston-texans',
  },
  {
    id: 14, team_name: 'Indianapolis Colts', division: 'AFC SOUTH', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 325, points_against: 412, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ind.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/ind/indianapolis-colts',
  },
  {
    id: 15, team_name: 'Jacksonville Jaguars', division: 'AFC SOUTH', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 419, points_against: 466, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/jax.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/jax/jacksonville-jaguars',
  },
  {
    id: 16, team_name: 'Kansas City Chiefs', division: 'AFC WEST', wins: 13, losses: 3, tie: 0, percentage: 0.812, points_for: 516, points_against: 310, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/kc.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs',
  },
  {
    id: 17, team_name: 'Los Angeles Rams', division: 'NFC WEST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 523, points_against: 319, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lar.png&h=40&w=40', link: '/',
  },
  {
    id: 18, team_name: 'Miami Dolphins', division: 'AFC EAST', wins: 6, losses: 10, tie: 0, percentage: 0.375, points_for: 421, points_against: 516, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/mia.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/mia/miami-dolphins',
  },
  {
    id: 19, team_name: 'Minnesota Vikings', division: 'NFC NORTH', wins: 4, losses: 12, tie: 0, percentage: 0.250, points_for: 369, points_against: 568, team_logo: ' https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/min.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/min/minnesota-vikings',
  },
  {
    id: 20, team_name: 'New England Patriots', division: 'AFC EAST', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 518, points_against: 546, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ne.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/ne/new-england-patriots',
  },
  {
    id: 21, team_name: 'New Orleans Saints', division: 'NFC SOUTH', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 415, points_against: 378, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/no.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/no/new-orleans-saints',
  },
  {
    id: 22, team_name: 'New York Giants', division: 'NFC EAST', wins: 5, losses: 11, tie: 0, percentage: 0.312, points_for: 333, points_against: 476, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyg.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/nyg/new-york-giants',
  },
  {
    id: 23, team_name: 'New York Jets', division: 'AFC EAST', wins: 6, losses: 10, tie: 0, percentage: 0.375, points_for: 344, points_against: 499, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyj.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/nyj/new-york-jets',
  },
  {
    id: 24, team_name: 'Oakland Raiders', division: 'AFC WEST', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 386, points_against: 371, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/oak.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/oak/oakland-raiders',
  },
  {
    id: 25, team_name: 'Philadelphia Eagles', division: 'NFC EAST', wins: 2, losses: 14, tie: 0, percentage: 0.125, points_for: 333, points_against: 657, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/phi.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/phi/philadelphia-eagles',
  },
  {
    id: 26, team_name: 'Pittsburgh Steelers', division: 'AFC NORTH', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 526, points_against: 445, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/pit.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/pit/pittsburgh-steelers',
  },
  {
    id: 27, team_name: 'Los Angeles Chargers', division: 'AFC WEST', wins: 10, losses: 5, tie: 1, percentage: 0.656, points_for: 462, points_against: 417, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lac.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/lac/los-angeles-chargers',
  },
  {
    id: 28, team_name: 'San Francisco 49ers', division: 'NFC WEST', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 436, points_against: 464, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sf.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers',
  },
  {
    id: 29, team_name: 'Seattle Seahawks', division: 'NFC WEST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 549, points_against: 474, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sea.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/sea/seattle-seahawks',
  },
  {
    id: 30, team_name: 'Tampa Bay Buccaneers', division: 'NFC SOUTH', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 617, points_against: 499, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/tb.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/tb/tampa-bay-buccaneers',
  },
  {
    id: 31, team_name: 'Tennessee Titans', division: 'AFC SOUTH', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 237, points_against: 591, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ten.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/ten/tennessee-titans',
  },
  {
    id: 32, team_name: 'Washington Redskins', division: 'NFC EAST', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 394, points_against: 435, team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/wsh.png&h=40&w=40', link: 'http://www.espn.com/nfl/team/_/name/wsh/washington-redskins',
  },
];

const importMockTeamData = () => {
  Standings.create(mockTeamData).then(() => db.disconnect());
};

importMockTeamData();
