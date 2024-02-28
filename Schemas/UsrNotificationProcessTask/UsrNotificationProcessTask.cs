namespace BPMSoft.Core.Process.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using BPMSoft.Core.DB;
	using BPMSoft.Core.Entities;
	using BPMSoft.Core.Process;
	using BPMSoft.UI.WebControls.Controls;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: UsrNotificationProcessTask

	/// <exclude/>
	public partial class UsrNotificationProcessTask
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			
			/*
			 // Создаем экземпляр конфигурации напоминания.
			 var remindingConfig = new RemindingConfig(new Guid())
			 {
				 // Автор сообщения — контакт текущего пользователя. 
				 AuthorId = UserConnection.CurrentUser.ContactId,
				 // Целевой получатель — ответственный контакта.
				 ContactId = UsrNotificationReciever,
				 // Тип — напоминание. 
				 NotificationTypeId = RemindingConsts.NotificationTypeNotificationId,
				 // Дата отправки напоминания — текущее время. 
				 RemindTime = DateTime.Now,
				 // Текст напоминания. 
				 Description = UsrNotificationContent,
				 // Заголовок напоминания. 
				 PopupTitle = UsrNotificationTitle
			 };

			 // Создает экземпляр утилитного класса напоминания. 
			 var remindingUtilities = ClassFactory.Get<RemindingUtilities>();
			 // Создает напоминание. 
			 remindingUtilities.CreateReminding(UserConnection, remindingConfig);
			*/
			
			
			// Получаем схему Reminding.
			var remindingSchema = UserConnection.EntitySchemaManager.GetInstanceByName("Reminding");
			// Создаем экземпляр объекта Reminding.
			var reminding = remindingSchema.CreateEntity(UserConnection);
			// Заполнение полей по умолчанию.
			reminding.SetDefColumnValues();
			// Идентификатор уведомления в таблице.
			reminding.SetColumnValue("Id", Guid.NewGuid());
			// Автор уведомления.
			reminding.SetColumnValue("AuthorId", UserConnection.CurrentUser.ContactId);
			// Получатель уведомления.
			reminding.SetColumnValue("ContactId", UsrNotificationReciever);
			// Идентификатор из таблицы RemindingSource, указывающий на автора уведомления.
			reminding.SetColumnValue("SourceId", new Guid("a66d08e1-2e2d-e011-ac0a-00155d043205"));
			// Время отправки уведомления.
			reminding.SetColumnValue("RemindTime", UserConnection.CurrentUser.GetCurrentDateTime());
			// Содержание уведомления.
			reminding.SetColumnValue("SubjectCaption", UsrNotificationContent);
			// Идентификатор таблицы (схемы) раздела.
			reminding.SetColumnValue("SysEntitySchemaId", new Guid("1BAB9DCF-17D5-49F8-9536-8E0064F1DCE0"));
			// Сохраняем запись.
			reminding.Save();

			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}

