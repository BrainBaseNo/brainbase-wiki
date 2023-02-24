import React from "react";

const months = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember",
];

const TO_BE_ANNOUNCED_TEXT = "TBA";

function getDateParts(dateString) {
  const [year, month, day] = dateString.split("-").map((e) => parseInt(e, 10));
  return { year, month, day };
}

function formatDate(event) {
  const currentYear = new Date().getFullYear();
  const start = getDateParts(event.date);
  const end = getDateParts(event.date);

    const str = `${start.day}. ${months[start.month - 1]}`;
    return currentYear === end.year ? str : `${str} ${start.year}`;
  
}

function EventList({ events }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Når</th>
          <th>Hva</th>
          <th>Hvor</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.docId}>
            <td>{formatDate(event)}</td>
            <td>
              <a href={event.href}>{event.what}</a>
            </td>
            <td><a href={event.href}>{event.location}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function KalenderPage({ events }) {

  const currentDate = new Date()
    .toISOString()
    .substring(0, "yyyy-mm-dd".length);

  
  const upcomingEvents = events.filter((item) => item.date >= currentDate);

  upcomingEvents.sort((a, b) =>
    a.endDate > b.endDate ? 1 : a.endDate === b.endDate ? 0 : -1
  );

  const pastEvents = events.filter((item) => item.endDate < currentDate);
  pastEvents.sort((a, b) =>
    a.endDate > b.endDate ? -1 : a.endDate === b.endDate ? 0 : 1
  );

  return (
    <>
      <h2>Kommende meetups</h2>
      <EventList events={upcomingEvents} />

      <h2>Tidligere meetups </h2>
      <EventList events={pastEvents} />
    </>
  );
}