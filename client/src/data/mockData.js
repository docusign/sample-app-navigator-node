const mockData = {
    ctoken: null,
    agreementDocuments: [
      {
        id: "224825fd-27b0-4ee2-bdf1-d3fdf6af3634",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:23.1704130+00:00",
        modifiedAt: "2024-10-10T15:29:56.4950120+00:00",
        documentStorageId: "69b71521-bc80-4d2d-abb7-bb15c69362e2",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "3b1159dc-4987-4c3b-a524-3c622eb39f45"
        },
        etag: 4,
        data: {
          envelope: {
            id: "3b1159dc-4987-4c3b-a524-3c622eb39f45",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document sent from the PHP SDK"
          },
          agreementType: "OfferLetterDocumentData",
          effectiveDate: "2024-10-09T00:00:00.0000000",
          expirationDate: "2024-10-30T00:00:00.0000000",
          extractionStatus: "DONE",
          name: "Salary action",
          parties: [
            {
              id: "com.docusign.platform@1.1.1.Party#df13180d-f347-4bef-a82c-4fcb06b3dfc8",
              name: "Andy Automator"
            }
          ]
        }
      },
      {
        id: "8f54d252-f62a-4ff7-abe2-62130539e1f8",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:23.0927560+00:00",
        modifiedAt: "2024-10-03T22:14:40.0459110+00:00",
        documentStorageId: "5805cd53-4872-4b6b-b713-d6bcf49a1c5f",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "a4ee1d3c-d63e-4999-87ad-6d138aa7d9b0"
        },
        etag: 4,
        data: {
          envelope: {
            id: "a4ee1d3c-d63e-4999-87ad-6d138aa7d9b0",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document sent from the PHP SDK"
          },
          agreementType: "OfferLetterDocumentData",
          extractionStatus: "DONE",
          name: "Salary action"
        }
      },
      {
        id: "ac0d6a18-4d2b-4951-af5f-6f49471c6e7e",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:22.9049090+00:00",
        modifiedAt: "2024-10-03T22:14:30.0746030+00:00",
        documentStorageId: "cdc37cd7-4fcc-41ff-9f2f-fe6971d43d19",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "1ee86d18-58e6-4b2b-bf99-db24f612a5d4"
        },
        etag: 4,
        data: {
          envelope: {
            id: "1ee86d18-58e6-4b2b-bf99-db24f612a5d4",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document sent from the PHP SDK"
          },
          agreementType: "OtherDocumentData",
          extractionStatus: "DONE",
          name: "Example document"
        }
      },
      {
        id: "d47555ab-2bd0-4d1b-8b2c-348b46b60ee3",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:22.4959980+00:00",
        modifiedAt: "2024-10-03T22:14:28.1449230+00:00",
        documentStorageId: "06e5b1a6-35bf-4de5-95c0-22550f0719ab",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "36eb40d8-ae1b-414e-b58e-67f5ce00c463"
        },
        etag: 4,
        data: {
          envelope: {
            id: "36eb40d8-ae1b-414e-b58e-67f5ce00c463",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document sent from the PHP SDK"
          },
          agreementType: "OtherDocumentData",
          extractionStatus: "DONE",
          name: "Example document"
        }
      },
      {
        id: "6968221b-de72-498d-b020-f0a958b2425f",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:22.4522320+00:00",
        modifiedAt: "2024-10-03T22:14:26.7846590+00:00",
        documentStorageId: "b7b1b682-987d-4a9d-a8a9-8ff0db55753a",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "19724bbd-92a3-4c14-b1a2-effe985a8d4f"
        },
        etag: 4,
        data: {
          envelope: {
            id: "19724bbd-92a3-4c14-b1a2-effe985a8d4f",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              },
              {
                email: "dslauncherautomation+test@gmail.com",
                phone: null,
                userId: "8a00cf40-a8ce-4865-8968-e7af1a5f7206"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document"
          },
          agreementType: "OrderFormDocumentData",
          extractionStatus: "DONE",
          name: "Appendix 1--Sales order",
          parties: [
            {
              id: "com.docusign.platform@1.1.1.Party#0c587f83-9102-471e-a203-9ad67cb6f0bd",
              name: "World Wide Corp"
            },
            {
              id: "com.docusign.platform@1.1.1.Party#df13180d-f347-4bef-a82c-4fcb06b3dfc8",
              name: "Andy Automator"
            }
          ]
        }
      },
      {
        id: "ce53b1d1-4caa-4b8a-9042-f26740c536fd",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:22.3847170+00:00",
        modifiedAt: "2024-10-03T22:14:28.2736110+00:00",
        documentStorageId: "31705af1-86ea-41e3-9784-68341f260dd7",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "19724bbd-92a3-4c14-b1a2-effe985a8d4f"
        },
        etag: 4,
        data: {
          envelope: {
            id: "19724bbd-92a3-4c14-b1a2-effe985a8d4f",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              },
              {
                email: "dslauncherautomation+test@gmail.com",
                phone: null,
                userId: "8a00cf40-a8ce-4865-8968-e7af1a5f7206"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document"
          },
          agreementType: "OtherDocumentData",
          extractionStatus: "DONE",
          name: "Lorem Ipsum"
        }
      },
      {
        id: "a47dc17c-1278-4727-801f-9aa55358819f",
        version: "1.1.1",
        createdAt: "2024-10-03T22:14:22.3568580+00:00",
        modifiedAt: "2024-10-03T22:14:28.1456800+00:00",
        documentStorageId: "121f08b6-9c3d-4bb4-b9d4-71ea38e44810",
        externalSource: {
          sourceName: "ESign",
          externalSourceId: "f3d27d54-5fdd-46fa-a210-4ab0836605b6"
        },
        etag: 4,
        data: {
          envelope: {
            id: "f3d27d54-5fdd-46fa-a210-4ab0836605b6",
            recipients: [
              {
                email: "dslauncherautomation@gmail.com",
                phone: null,
                userId: "bba0234c-646a-472c-9144-5a10bdb1640c"
              },
              {
                email: "dslauncherautomation+test@gmail.com",
                phone: null,
                userId: "8a00cf40-a8ce-4865-8968-e7af1a5f7206"
              }
            ],
            sender: {
              userId: "91118afb-1a7a-4b9f-826a-3c0b81fff5c4"
            },
            subject: "Please sign this document"
          },
          agreementType: "OtherDocumentData",
          extractionStatus: "DONE",
          name: "Lorem Ipsum"
        }
      }
    ]
  };
  
  module.exports = mockData;