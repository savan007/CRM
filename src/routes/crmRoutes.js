import { addNewContact } from "../controllers/crmController";
import { getContact } from "../controllers/crmController";
import { getContactByID } from "../controllers/crmController";
import { updateContact } from "../controllers/crmController";
import { deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContact)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactByID)

        .put(updateContact)

        .delete(deleteContact)
}

export default routes;