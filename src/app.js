import endpoints from './helpers/endpoints';
import sendHttpRequest from './helpers/api';

const rivraddon = {
  analytics: {
    enableAnalytics: () => {
      console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
    },
    trackPbjsEvent: event => {
      if (!event || !event.eventType) {
        return false;
      }

      sendHttpRequest('POST', endpoints.EVENT_POST, {
        'eventType': event.eventType
      }).then((response) => console.log(response));
    }
  }
};

rivraddon.analytics.trackPbjsEvent({});
rivraddon.analytics.enableAnalytics();

window.rivraddon = rivraddon;
export default rivraddon;
