# Observing Web PoC

This is a PoC on achieving observability on web applications. The following diagram shows the infrastructure in place for this PoC.

[Diagram Source](http://www.plantuml.com/plantuml/uml/VP0n3i8m34NtdC8NQ0_0W0eBAqmCLGStDMebcaIs8t5ylA044R7Pt-z_Mnv4aJNlJpVUQOPJIfCRpp7k7jMlLjjSPUdebI8hiIbNZZlfIbcikJ0-CE3aYX-w8rGHS82PqCSWhbOD-iasr99vy_Ar1Vg-3OjdJDHWFrVzOMgXOCNPO6wPU2Dn0uN5FlO6)

![Diagram](http://www.plantuml.com/plantuml/svg/VP0n3i8m34NtdC8NQ0_0W0eBAqmCLGStDMebcaIs8t5ylA044R7Pt-z_Mnv4aJNlJpVUQOPJIfCRpp7k7jMlLjjSPUdebI8hiIbNZZlfIbcikJ0-CE3aYX-w8rGHS82PqCSWhbOD-iasr99vy_Ar1Vg-3OjdJDHWFrVzOMgXOCNPO6wPU2Dn0uN5FlO6)

The Web App sends beacons to a given beacon endpoint by using [boomerang](https://github.com/akamai/boomerang).

It sends generic performance related beacons as well as instrumation triggered beacons that reflect the key business metrics we want to observe.

Those beacons are transformed into metrics that can be queried on Grafana to gather insights about your end user metrics.
