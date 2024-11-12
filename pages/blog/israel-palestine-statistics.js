import styles from '../../styles/blog.module.scss';
import Link from 'next/link';
export default function blog() {
	return (
		<div className="stats-container">
			<section className={styles.considerations}>
				<Link className={`back-link`} href="israel-hamas-conflict">
					Back
				</Link>
				<h2 className="my-title">
					1. Impact on Children and Civilian Suffering:
				</h2>
				<ul>
					<li>
						<strong>Palestinian Children:</strong> According to the{' '}
						<strong>UNICEF</strong>, since the 2014 Gaza conflict,{' '}
						<strong>over 2,000 Palestinian children</strong> have been killed,
						and <strong>thousands more</strong> have been injured. Furthermore,
						during the <strong>2021 Gaza conflict</strong>, at least{' '}
						<strong>67 Palestinian children</strong> were killed, with{' '}
						<strong>over 1,000 children</strong> injured, many of whom have
						faced lifelong disabilities.
						<br />
						Source:{' '}
						<Link
							href="https://www.unicef.org"
							target="_blank"
							className="stat-link"
						>
							UNICEF
						</Link>
						, &quot;Children in Gaza: 2014 Conflict Impact&quot;
					</li>
					<li>
						<strong>Israeli Children:</strong> In the{' '}
						<strong>2021 Gaza conflict</strong>,{' '}
						<strong>two Israeli children</strong> were killed, and many others
						were injured, mostly by rocket attacks from Gaza. Additionally, the
						stress and trauma associated with rocket fire and bombings, as well
						as the constant threat to civilian life, have long-term
						psychological impacts.
						<br />
						Source:{' '}
						<Link
							href="https://mfa.gov.il"
							target="_blank"
							className="stat-link"
						>
							Israel Ministry of Foreign Affairs
						</Link>
						, &quot;Israel&apos;s Security and the Protection of Civilian
						Lives&quot;
						<br />
						Source:{' '}
						<Link
							href="https://www.un.org"
							target="_blank"
							className="stat-link"
						>
							United Nations
						</Link>
						, &quot;Israel-Palestine: Impact of the 2021 Conflict on
						Children&quot;
					</li>
					<li>
						<strong>Displacement and Psychological Trauma:</strong> Over the
						years, both Palestinian and Israeli children have suffered from
						displacement and trauma due to the ongoing violence. In{' '}
						<strong>Gaza</strong>, over <strong>50,000 children</strong> were
						displaced during the <strong>2021 conflict</strong>, and many others
						live in a constant state of psychological trauma. For Israeli
						children, regular exposure to rocket fire and airstrikes creates
						chronic stress and anxiety.
						<br />
						Source:{' '}
						<Link
							href="https://www.unrwa.org"
							target="_blank"
							className="stat-link"
						>
							UNRWA
						</Link>
						, &quot;Gaza Emergency Appeal 2021&quot;
						<br />
						Source:{' '}
						<Link
							href="https://www.unicef.org"
							target="_blank"
							className="stat-link"
						>
							UNICEF
						</Link>
						, &quot;Gaza Conflict: The Impact on Children&quot;
					</li>
				</ul>
			</section>
			<section className={styles.considerations}>
				<h2 className="my-title">2. Public Opinion on Peace Efforts:</h2>
				<ul>
					<li>
						<strong>Palestinian Support:</strong> A 2020{' '}
						<strong>Palestinian Center for Policy and Survey Research</strong>{' '}
						survey found that <strong>51% of Palestinians</strong> in the West
						Bank and Gaza Strip supported a two-state solution, though the
						support was contingent upon Israel halting settlement expansion and
						granting full sovereignty to the Palestinians.
						<br />
						Source:{' '}
						<Link
							href="http://pcpsr.org/"
							target="_blank"
							className="stat-link"
						>
							Palestinian Center for Policy and Survey Research
						</Link>
						, &quot;Public Opinion Poll No. 74&quot; (2020)
					</li>
					<li>
						<strong>Israeli Support:</strong> A 2022{' '}
						<strong>Israel Democracy Institute</strong> survey found that{' '}
						<strong>59% of Israelis</strong> still support the idea of a
						two-state solution, though this number varies greatly depending on
						security concerns and political developments.
						<br />
						Source:{' '}
						<Link
							href="https://en.idi.org.il"
							target="_blank"
							className="stat-link"
						>
							Israel Democracy Institute
						</Link>
						, &quot;The Israeli Public Opinion on the Two-State Solution&quot;
						(2022)
					</li>
					<li>
						<strong>Public Opinion on Negotiations:</strong> A 2020{' '}
						<strong>Palestinian poll</strong> revealed that{' '}
						<strong>67% of Palestinians</strong> felt that a peace agreement was
						still possible with Israel if certain conditions were met, like the
						return of refugees and an end to the occupation.
						<br />
						Source:{' '}
						<Link
							href="http://pcpsr.org/"
							target="_blank"
							className="stat-link"
						>
							Palestinian Center for Policy and Survey Research
						</Link>
						, &quot;Public Opinion Poll No. 74&quot; (2020)
					</li>
					<li>
						<strong>Support for a Comprehensive Peace Agreement:</strong>{' '}
						According to a <strong>2019 Pew Research Center</strong> survey,{' '}
						<strong>76% of Palestinians</strong> and{' '}
						<strong>72% of Israelis</strong> agreed that a peace agreement would
						significantly benefit both peoples, though the terms of such an
						agreement remain highly contentious.
						<br />
						Source:{' '}
						<Link
							href="https://www.pewresearch.org"
							target="_blank"
							className="stat-link"
						>
							Pew Research Center
						</Link>
						, &quot;Global Views on the Israeli-Palestinian Conflict&quot;
						(2019)
					</li>
				</ul>
			</section>
			<section className={styles.considerations}>
				<h2 className="my-title">Humanitarian Impact Statistics:</h2>
				<ul>
					<li>
						<strong>Total Casualties:</strong> Since the start of the Second
						Intifada in 2000, over <strong>5,000 Israelis</strong> have been
						killed, and over <strong>10,000 Palestinians</strong> have died as a
						result of the conflict, highlighting the heavy toll the violence
						takes on both sides.
						<br />
						Source:{' '}
						<Link
							href="https://www.btselem.org"
							target="_blank"
							className="stat-link"
						>
							B&apos;Tselem
						</Link>
						, &quot;Statistics: The Israeli-Palestinian Conflict&quot;
					</li>
					<li>
						<strong>Casualties in Gaza:</strong> In the{' '}
						<strong>2021 Gaza conflict</strong>,{' '}
						<strong>256 Palestinians</strong> were killed, including{' '}
						<strong>66 children</strong>, and <strong>13 Israelis</strong> were
						killed, including <strong>two children</strong>. The high civilian
						toll, especially among children, underscores the devastating impact
						of the conflict on non-combatants.
						<br />
						Source:{' '}
						<Link
							href="https://www.unocha.org"
							target="_blank"
							className="stat-link"
						>
							United Nations Office for the Coordination of Humanitarian Affairs
							(OCHA)
						</Link>
						, &quot;Gaza Strip: 2021 Conflict Update&quot;
					</li>
				</ul>
			</section>
		</div>
	);
}
